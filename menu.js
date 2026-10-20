(() => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const tabs = [...document.querySelectorAll('.menu-tabs a')];
  const sections = [...document.querySelectorAll('.food-section')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) tabs.forEach((tab) => tab.classList.toggle('active', tab.hash === `#${visible.target.id}`));
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, .2, .5] });
    sections.forEach((section) => observer.observe(section));
  }
})();

