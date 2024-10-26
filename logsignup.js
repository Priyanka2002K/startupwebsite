var loginForm = document.querySelector('.login-form');
var signupForm = document.querySelector('.signup-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate the user inputs

  if (loginForm.username.value === '') {
    alert('Please enter a username');
    return;
  }

  if (loginForm.password.value === '') {
    alert('Please enter a password');
    return;
  }

  // Submit the form

  loginForm.submit();
});

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate the user inputs

  if (signupForm.username.value === '') {
    alert('Please enter a username');
    return;
  }

  if (signupForm.email.value === '') {
    alert('Please enter an email address');
    return;
  }

  if (signupForm.password.value === '') {
    alert('Please enter a password');
    return;
  }

  // Submit the form

  signupForm.submit();
});