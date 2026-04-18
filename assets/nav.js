document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (!menuToggle || !mobileMenu || !mobileClose || !mobileOverlay) {
    return;
  }

  function openMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('show');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('show');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);
  mobileOverlay.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
});
