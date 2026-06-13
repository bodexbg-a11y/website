import { useEffect } from 'react';

/**
 * useAnimations — master scroll + interaction animations
 * Handles: all element groups, navbar, stats-strip, parallax mouse
 * ui-ux-pro-max §7: spatial continuity, prefers-reduced-motion
 */
export function useAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── 1. Reveal all animated element groups ── */
    const selectors = [
      '[data-reveal]',
      '.stats-strip__item',
      '.why-stat',
      '.why-card',
      '.sector-big',
      '.sector-sm',
      '.proc-step',
      '.proc-photo',
      '.srv-card',
      '.trust-band__item',
      '.sol-item',
    ];

    if (reduced) {
      document.querySelectorAll(selectors.join(',')).forEach(el => {
        el.classList.add('revealed');
      });
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

      document.querySelectorAll(selectors.join(',')).forEach(el => io.observe(el));

      /* ── 2. Navbar scroll state ── */
      const navbar = document.getElementById('header');
      const onScroll = () => {
        if (!navbar) return;
        if (window.scrollY > 20) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      /* ── 3. Subtle mouse parallax on hero glow ── */
      const glow = document.querySelector('.hero-glow-parallax');
      const onMouseMove = (e) => {
        if (!glow) return;
        const x = (e.clientX / window.innerWidth  - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      };
      window.addEventListener('mousemove', onMouseMove, { passive: true });

      /* ── 4. Smooth counter for stat numbers ── */
      const counterEls = document.querySelectorAll('[data-count]');
      const counterIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const duration = 1000;
          const start = performance.now();
          const from = parseFloat(el.dataset.from || '0');

          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(from + eased * (target - from)) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIo.unobserve(el);
        });
      }, { threshold: 0.5 });
      counterEls.forEach(el => counterIo.observe(el));

      return () => {
        io.disconnect();
        counterIo.disconnect();
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);
}
