const showBtn = document.querySelector('.show-modal');
const popupWin = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close-btn');
const modalCont = document.querySelector('.modal-container');

showBtn.addEventListener('click', () => {
    popupWin.style.transform = 'scale(1)';
    modalCont.style.animation = 'popup 700ms ease-in-out forwards';
    noScroll.classList.add('no-scroll');
})
closeBtn.addEventListener('click', () => {
    popupWin.style.transform = 'scale(0)';
    modalCont.style.animation = 'none';
    modalCont.style.animationDelay = 'none';
    noScroll.classList.remove('no-scroll');
})