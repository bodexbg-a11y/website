import { useEffect } from 'react';

/**
 * useReveal — production scroll animation hook
 * ui-ux-pro-max §7: duration 150-300ms, spatial continuity, prefers-reduced-motion
 *
 * Supports data attributes:
 *   data-reveal              — basic fade-up
 *   data-reveal="slide-left" — slide from left
 *   data-reveal="slide-right"— slide from right
 *   data-reveal="scale"      — scale up
 *   data-reveal="clip"       — clip-path reveal (headline effect)
 *   data-reveal="counter"    — animates number counting
 *   data-d="0..5"            — stagger delay multiplier (×80ms)
 */
export function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = (parseInt(el.dataset.d || '0')) * 80;

        setTimeout(() => {
          el.classList.add('revealed');

          /* Counter animation */
          if (el.dataset.reveal === 'counter' || el.hasAttribute('data-count')) {
            animateCounter(el);
          }
        }, delay);

        observer.unobserve(el);
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.count || el.textContent.replace(/[^0-9.]/g, ''));
  const suffix = el.dataset.suffix || el.textContent.replace(/[0-9.]/g, '').trim();
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const val = Math.round(eased * target);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
