// ................... Show NavBar & unable Scroll .................

const menuBtn = document.querySelector('.menu-btn-container');
let nav = document.querySelector(".menu");
const noScroll = document.querySelector("body");
let navShown = false;
let navLink = document.querySelectorAll(".nav-link");

function closeMenu(){
    nav.classList.remove("show-menu");
    noScroll.classList.remove("no-scroll");
    navShown = false;

}

menuBtn.addEventListener("click", () => {
    if (!navShown) {
        nav.classList.add("show-menu");
        noScroll.classList.add("no-scroll");
        navShown = true;
    }
    else {
       closeMenu();
    }
})

navLink.forEach(link => {
        link.addEventListener("click", () => {
        closeMenu();
    })
});
