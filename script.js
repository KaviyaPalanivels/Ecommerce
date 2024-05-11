  function validateForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let isValid = true;
    const errorMessageSpans = document.querySelectorAll('.error-message');
  
    // validate name box
    if (!name.trim()) {
      errorMessageSpans[0].textContent = 'Please enter your name.';
      document.getElementById('name').classList.add('invalid');
      isValid = false;
    } else {
      errorMessageSpans[0].textContent = '';
      document.getElementById('name').classList.remove('invalid')
    }
  
  // Validate email \
  const emailRegex = /^\[\\w\-\.\]\+@\[\\w\-\]\+\(?\:\\\.\[w\-\]\+\)\*<;
    if (!emailRegex.test(email)) {
      errorMessageSpans[2].textContent = 'Please enter a valid email address.';
      document.getElementById('email').classList.add('invalid');
      isValid = false;
    } 
    else {
      errorMessageSpans[2].textContent = '';
      document.getElementById('email').classList
    }
}
// open login page

const loginicon = document.getElementById('loginicon');
const registrationForm= document.getElementById('registrationForm');
function (){
loginicon.addEventListener('click', () => {
    registrationForm.style.display = 'block';
});

function validateForm() {
 
}
}