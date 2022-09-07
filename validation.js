const form = document.querySelector('.form');
const msg = document.querySelector('.error');
const email = document.querySelector('#email');
const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

function showMessage(message) {
  msg.style.display = 'block';
  msg.innerText = message;
  return msg;
}

form.addEventListener('submit', (event) => {
  if (!emailRegex.test(email.value.trim())) {
    event.preventDefault();
    showMessage('Please enter a lowercase valid email address');
  } else {
    showMessage('');
  }
});