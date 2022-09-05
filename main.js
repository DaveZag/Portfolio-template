// ................... Show NavBar & unable Scroll .................//
const menuBtn = document.querySelector('.menu-btn-container');
const nav = document.querySelector('.menu');
const noScroll = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');
let navShown = false;

function closeMenu() {
  nav.classList.remove('show-menu');
  noScroll.classList.remove('no-scroll');
  navShown = false;
}

menuBtn.addEventListener('click', () => {
  if (!navShown) {
    nav.classList.add('show-menu');
    noScroll.classList.add('no-scroll');
    navShown = true;
  } else {
    closeMenu();
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
