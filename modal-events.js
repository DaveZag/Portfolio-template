const showBtn = document.querySelectorAll('.show-modal');
const popupWin = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close-btn');
const modalCont = document.querySelector('.modal-container');
const BodyEvent = document.querySelector('body');

showBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupWin.style.transform = 'scale(1)';
    modalCont.style.animation = 'popup 200ms linear forwards';
    BodyEvent.classList.add('no-scroll');
  });

  closeBtn.addEventListener('click', () => {
    popupWin.style.transform = 'scale(0)';
    modalCont.style.animation = 'none';
    modalCont.style.animationDelay = 'none';
    BodyEvent.classList.remove('no-scroll');
  });
});