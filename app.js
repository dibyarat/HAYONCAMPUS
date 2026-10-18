/**
 * HayonCampus — Client Application Script
 * Implements intersection observer scroll reveals, accessible mobile drawer,
 * smooth anchor scrolling, and constants data binding.
 */

document.addEventListener('DOMContentLoaded', () => {
  const constants = window.HAYON_CONSTANTS || {};

  // ========================================================
  // 1. DYNAMIC YEAR IN FOOTER
  // ========================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========================================================
  // 2. FADE-UP-ON-SCROLL REVEAL (INTERSECTION OBSERVER)
  // ========================================================
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-section');

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12,
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // ========================================================
  // 3. RESPONSIVE MOBILE NAVIGATION DRAWER
  // ========================================================
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

  if (mobileToggleBtn && mobileMenuDrawer) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !mobileMenuDrawer.classList.contains('is-open');
      mobileMenuDrawer.classList.toggle('is-open', isOpen);
      mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    mobileToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any link inside the mobile drawer
    mobileMenuDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuDrawer.classList.contains('is-open')) {
        toggleMenu(false);
        mobileToggleBtn.focus();
      }
    });

    // Close on clicking outside
    document.addEventListener('click', (e) => {
      if (
        mobileMenuDrawer.classList.contains('is-open') &&
        !mobileMenuDrawer.contains(e.target) &&
        !mobileToggleBtn.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });
  }

  // ========================================================
  // 4. CONSTANTS DATA HYDRATION FOR EXTERNAL LINKS
  // ========================================================
  if (constants.urls) {
    document.querySelectorAll('[data-url-key]').forEach((el) => {
      const key = el.getAttribute('data-url-key');
      if (constants.urls[key]) {
        el.setAttribute('href', constants.urls[key]);
      }
    });
  }

  // ========================================================
  // 5. SMOOTH ANCHOR SCROLLING WITH OFFSET
  // ========================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });

          // Focus target element for screen reader accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });
});
