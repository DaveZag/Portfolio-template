const form = document.querySelector('.form');
const msg = document.querySelector('.error');
const email = document.querySelector('#email');
const emailRegex  = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/
function showMessage(message){
    msg.innerText = message;
    return msg;
}
