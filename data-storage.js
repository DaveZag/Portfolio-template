const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');
const form = document.querySelector('#form');

document.querySelectorAll('.input').foreach((input) => {
    input.addEventListener('input', (event) => { 
        event.preventDefault();

    const nameData = document.querySelector('#name').value;      
    const emailData = document.querySelector('#email').value;
    const messageData = document.querySelector('#message').value;


    const userInput = {
        Name: nameData,
        email: emailData,
        message: messageData,
    };

    localStorage.setItem('user', JSON.stringify(userInput));
  });    
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});