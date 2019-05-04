// Retrieve DOM ID element with Variables
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Event Listener 'Click'
signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel');
});