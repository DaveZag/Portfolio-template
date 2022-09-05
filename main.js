const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
let shown = false;


menuBtn.addEventListener("click", () =>  {
    nav.classList.add("navShow");
    // if (shown){
    //     nav.classList.add("navShow");
    //     shown = true;
    // }
    // else {
    //     nav.classList.remove("navShow")
    //     shown = false
    // }
})