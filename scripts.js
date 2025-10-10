document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger || !navMenu) return; // nothing to do

  // Ensure ARIA initial state
  hamburger.setAttribute('aria-expanded', 'false');

  const openMenu = () => {
    navMenu.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link =>
    link.addEventListener('click', () => closeMenu())
  );

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});
