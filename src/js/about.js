document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  if (aboutSection) {
    observer.observe(aboutSection);
  }
});
