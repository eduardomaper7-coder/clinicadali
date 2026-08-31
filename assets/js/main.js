document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('[data-dali-slider]').forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll('.dali-slide'));
    const dots = Array.from(slider.querySelectorAll('.dali-slider-dots button'));
    const caption = slider.querySelector('.dali-slider-caption strong');
    if (!slides.length) return;

    let current = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-active')));
    if (current === -1) current = 0;

    const showSlide = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
      if (caption) caption.textContent = slides[current].dataset.title || '';
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    showSlide(current);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(() => showSlide(current + 1), 3500);
    }
  });
});
