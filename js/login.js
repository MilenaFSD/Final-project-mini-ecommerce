console.log('Login page is active');

function emailValidation(element) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
  var value = element.val() || element.value; 
  if (emailRegex.test(value)) {
    if (element.style) element.style.border = '3px solid green';
    else element.css('border', '3px solid green');
  } else {
    if (element.style) element.style.border = '3px solid red';
    else element.css('border', '3px solid red');
    element.focus();
  }
}

function loginApi(e) {
  e.preventDefault();
  console.log('Login API is called');

  var emailEle = $('#exampleInputEmail1');
  var passwordEle = $('#exampleInputPassword1');

  
  emailValidation(emailEle);
  var username = emailEle.val().trim();
  var password = passwordEle.val().trim();

  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }

 
  if (username === 'kminchelle@example.com' && password === '0lelplR') {
    localStorage.setItem('token', 'dummy-token-123'); 
    window.location.href = 'products.html';
  } else {
    alert('Invalid username or password');
  }
}

$(document).ready(function () {
  $('#submit-btn').click(loginApi);
  console.log('Document is ready');
});