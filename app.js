(() => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('is-visible', open);
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-visible');
  }));
  document.getElementById('year').textContent = new Date().getFullYear();
})();

