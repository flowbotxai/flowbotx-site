/* ============================================================
   Snapflow Solutions — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

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
      if (targetId === '#') return;
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

})();
