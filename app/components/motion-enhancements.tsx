'use client';

import { useEffect } from 'react';

/** Progressive enhancement: the full page and native FAQ work without JavaScript. */
export default function MotionEnhancements() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      '.hero-copy > *, .hero-art, .section-heading, .lesson-card, .teacher-art, .about-copy, .faq > div, .contact-inner > :not(.contact-star)',
    ));
    let observer: IntersectionObserver | undefined;
    const running = new Map<HTMLDetailsElement, { animation: Animation; opening: boolean }>();

    function settleAnimations() {
      for (const [detail, { animation, opening }] of running) {
        animation.onfinish = null;
        animation.cancel();
        detail.open = opening;
        detail.style.height = '';
        detail.style.overflow = '';
        delete detail.dataset.closing;
      }
      running.clear();
    }

    function reveal() {
      observer?.disconnect();
      if (preference.matches || !('IntersectionObserver' in window)) {
        elements.forEach(element => element.removeAttribute('data-reveal'));
        return;
      }
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-reveal', 'visible');
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.08 });
      for (const element of elements) {
        // Leave content already above the viewport readable when opening an anchor.
        if (element.getBoundingClientRect().bottom < 0) continue;
        element.setAttribute('data-reveal', 'pending');
        observer.observe(element);
      }
    }

    function updateMotionPreference() {
      if (preference.matches) settleAnimations();
      reveal();
    }

    reveal();
    preference.addEventListener('change', updateMotionPreference);

    const cleanups = Array.from(document.querySelectorAll<HTMLDetailsElement>('.questions details')).map(detail => {
      const summary = detail.querySelector('summary');
      const answer = detail.querySelector<HTMLElement>('.answer');
      if (!summary || !answer) return () => {};

      function toggle(event: MouseEvent) {
        if (preference.matches || typeof detail.animate !== 'function') return;
        event.preventDefault();

        const previous = running.get(detail);
        const opening = previous ? !previous.opening : !detail.open;
        const startHeight = detail.getBoundingClientRect().height;
        if (previous) {
          previous.animation.onfinish = null;
          previous.animation.cancel();
        }

        detail.open = true;
        detail.style.height = 'auto';
        const style = getComputedStyle(detail);
        const borders = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        const endHeight = summary!.getBoundingClientRect().height + borders + (opening ? answer!.offsetHeight : 0);
        detail.style.height = `${startHeight}px`;
        detail.style.overflow = 'hidden';
        detail.dataset.closing = String(!opening);

        const animation = detail.animate(
          [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
          { duration: 300, easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'forwards' },
        );
        running.set(detail, { animation, opening });
        animation.onfinish = () => {
          detail.open = opening;
          detail.style.height = '';
          detail.style.overflow = '';
          delete detail.dataset.closing;
          animation.cancel();
          running.delete(detail);
        };
      }

      summary.addEventListener('click', toggle);
      return () => summary.removeEventListener('click', toggle);
    });

    return () => {
      observer?.disconnect();
      preference.removeEventListener('change', updateMotionPreference);
      elements.forEach(element => element.removeAttribute('data-reveal'));
      cleanups.forEach(cleanup => cleanup());
      settleAnimations();
    };
  }, []);

  return null;
}
