/* ============================================================
   Snapflow Solutions — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  // -- Mobile nav toggle -------------------------------------------------
  // Toggles the single .site-header__nav list rather than a duplicate mobile
  // copy, so there is only ever one set of nav links in the markup.
  var navToggle = document.querySelector('.site-header__toggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    var setNav = function (open) {
      siteNav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    navToggle.addEventListener('click', function () {
      setNav(!siteNav.classList.contains('is-open'));
    });

    // Close after choosing a destination
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setNav(false); });
    });

    // Close on Escape, and on click outside the header
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.site-header')) setNav(false);
    });
  }

  // -- Contact form submit ----------------------------------------------
  // Posts to the webhook in the form's own action, then sends the visitor to
  // the thank-you page. Without this the browser navigates to whatever the
  // webhook returns, which is a raw JSON body.
  //
  // The request goes out mode:'no-cors' with a urlencoded body — the same
  // content type a native form POST would send, which keeps it a "simple"
  // request with no preflight. The trade is that the response is opaque, so
  // a delivered-but-rejected submission (a 5xx from the endpoint) reads as
  // success here. Only network-level failure is detectable. Sending it as
  // cors instead would surface those, but any missing CORS header on the
  // endpoint would then make every successful submission look like a
  // failure, which is the worse way to be wrong.
  var contactForm = document.querySelector('.contact__form');

  if (contactForm && window.fetch) {
    var submitBtn = contactForm.querySelector('[type="submit"]');
    var sending = false;

    var showError = function (msg) {
      var box = contactForm.querySelector('.contact__error');
      if (!box) {
        box = document.createElement('p');
        box.className = 'contact__error';
        box.setAttribute('role', 'alert');
        if (submitBtn) contactForm.insertBefore(box, submitBtn);
        else contactForm.appendChild(box);
      }
      box.textContent = msg;
    };

    var clearError = function () {
      var box = contactForm.querySelector('.contact__error');
      if (box) box.remove();
    };

    // Fire the conversion, but never let a blocked or slow gtag hold up the
    // redirect. Whichever of the callback or the timeout lands first wins.
    var fireLead = function (done) {
      if (typeof gtag !== 'function') return done();
      var fired = false;
      var once = function () {
        if (fired) return;
        fired = true;
        done();
      };
      setTimeout(once, 600);
      gtag('event', 'generate_lead', { event_callback: once });
    };

    contactForm.addEventListener('submit', function (e) {
      var action = contactForm.getAttribute('action');
      // No endpoint wired up: fall through to the native POST rather than
      // swallowing the submission.
      if (!action || action.charAt(0) === '[') return;

      e.preventDefault();
      if (sending) return;
      sending = true;
      clearError();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.label = submitBtn.textContent;
        submitBtn.textContent = 'Sending…';
      }

      fetch(action, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(new FormData(contactForm))
      }).then(function () {
        fireLead(function () { window.location.href = '/thank-you.html'; });
      }).catch(function () {
        sending = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.label || 'Send It Over';
        }
        showError(
          'That didn’t send — check your connection and try again, ' +
          'or call or text us at (586) 400-2943.'
        );
      });
    });
  }

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
        if (siteNav && siteNav.classList.contains('is-open')) {
          siteNav.classList.remove('is-open');
          if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
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
