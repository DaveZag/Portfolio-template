const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const body = document.querySelector('body');

const dataSaved = localStorage.getItem('user');

body.onload = () => {
  if (dataSaved) {
    // Revonvert stored data to initial form and display it
    const parsedData = JSON.parse(dataSaved);
    nameInput.value = parsedData.name;
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
};

// Add event to track all inputs fields and their changes
document.querySelectorAll('.input').forEach((element) => {
  element.addEventListener('input', () => {
    // Select input fields values
    const nameData = document.querySelector('#name').value.trim();
    const emailData = document.querySelector('#email').value.trim();
    const messageData = document.querySelector('#message').value.trim();

    // store user inputs in object
    const userInput = {
      name: nameData,
      email: emailData,
      message: messageData,
    };

    // Store the object in local storage after converting to string
    localStorage.setItem('user', JSON.stringify(userInput));
  });
});