// Get references to form and button
const form = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');

// Add event listener to the form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if the email and password match the predefined values
  if (email === 'daniel@gmail.com' && password === '1234') {
    // Redirect to homepage.html on successful login
    window.location.href = 'homepage.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
