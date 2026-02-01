const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// overlay
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// toggle menu
function toggleMenu() {
  const isOpen = mainNav.classList.contains('active');

  menuToggle.classList.toggle('active');
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');

  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// events
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) toggleMenu();
  });
});

// scroll to top
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
