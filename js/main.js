/* ============================================================
   Snapflow Solutions — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  // -- Contact details assembled at runtime -----------------------------
  // The number and address are base64 in the markup so harvesters that don't
  // run JS never see them. Links fall back to the contact form without JS.
  (function () {
    function decode(v) { try { return atob(v); } catch (e) { return ''; } }

    document.querySelectorAll('[data-tel]').forEach(function (el) {
      var number = decode(el.getAttribute('data-tel'));
      if (!number) return;
      el.setAttribute('href', 'tel:' + number);
      el.removeAttribute('data-tel');
    });

    document.querySelectorAll('[data-em]').forEach(function (el) {
      var address = decode(el.getAttribute('data-em'));
      if (!address) return;
      el.setAttribute('href', 'mailto:' + address);
      el.removeAttribute('data-em');
    });
  })();


  // -- Mobile Nav Toggle --
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -- Services Dropdown --
  var dropdown = document.querySelector('.nav__dropdown');
  var trigger = document.querySelector('.nav__dropdown-trigger');
  if (dropdown && trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('is-open');
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
      }
    });
  }

  // -- FAQ Accordion --
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('is-open');

      // Close all
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
      });

      // Open clicked (if it wasn't already open)
      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // -- Smooth Scroll for anchor links --
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId.charAt(0) !== '#' || targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        // Close mobile nav if open
        if (mobileNav && mobileNav.classList.contains('is-open')) {
          mobileNav.classList.remove('is-open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // -- Scroll reveal --------------------------------------------------
  // Classes are applied here rather than in the markup, so the page stays
  // fully visible if JS fails or is blocked.
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced && 'IntersectionObserver' in window) {
    var revealTargets = [];

    document.querySelectorAll('.section__header').forEach(function (el) { revealTargets.push([el, 0]); });
    document.querySelectorAll('.improve__close, .blueprint__card, .how__stats, .area__chips, .faq__accordion, .contact__intro, .proof__lede, .proof__note').forEach(function (el) { revealTargets.push([el, 0]); });

    // grids stagger their children slightly, left to right
    ['.services__grid', '.how__steps', '.eng__grid', '.proof__results'].forEach(function (sel) {
      var grid = document.querySelector(sel);
      if (!grid) return;
      Array.prototype.forEach.call(grid.children, function (child, i) {
        revealTargets.push([child, Math.min(i, 5) * 60]);
      });
    });

    revealTargets.forEach(function (pair) {
      pair[0].classList.add('reveal');
      if (pair[1]) pair[0].style.transitionDelay = pair[1] + 'ms';
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (pair) { revealObserver.observe(pair[0]); });
  }

  // -- Business address autocomplete (Google Places) --------------------
  // Loads only if the Maps script is present. Without a key the field stays a
  // normal text input, so nothing breaks before the key is added.
  window.initAddressAutocomplete = function () {
    var input = document.getElementById('cf-address');
    var wrap = document.getElementById('address-field');
    if (!input || !wrap || !window.google || !google.maps) return;

    // Newer Places element (required for API projects created after March 2025)
    if (google.maps.importLibrary) {
      google.maps.importLibrary('places').then(function (places) {
        if (!places || !places.PlaceAutocompleteElement) return legacyAutocomplete(input);
        var el = new places.PlaceAutocompleteElement({ includedRegionCodes: ['us'] });
        el.id = 'cf-address-ac';
        el.className = 'field__autocomplete';
        input.type = 'hidden';
        wrap.appendChild(el);
        ['gmp-select', 'gmp-placeselect'].forEach(function (evt) {
          el.addEventListener(evt, function (e) {
            var prediction = e.placePrediction || (e.detail && e.detail.placePrediction);
            if (!prediction) return;
            var place = prediction.toPlace();
            place.fetchFields({ fields: ['formattedAddress'] }).then(function () {
              input.value = place.formattedAddress || '';
            });
          });
        });
      }).catch(function () { legacyAutocomplete(input); });
      return;
    }
    legacyAutocomplete(input);
  };

  function legacyAutocomplete(input) {
    if (!google.maps.places || !google.maps.places.Autocomplete) return;
    var ac = new google.maps.places.Autocomplete(input, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
      fields: ['formatted_address']
    });
    ac.addListener('place_changed', function () {
      var place = ac.getPlace();
      if (place && place.formatted_address) input.value = place.formatted_address;
    });
  }


})();
