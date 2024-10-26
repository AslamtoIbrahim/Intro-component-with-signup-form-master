const button = document.getElementById('button');
const firstName = document.getElementById('first-name');
const errorFirstName = document.getElementById('error-first-name');
const lastName = document.getElementById('last-name');
const errorLastName = document.getElementById('error-last-name');
const email = document.getElementById('email');
const erorrEmail = document.getElementById('error-email');
const password = document.getElementById('password');
const erorrPassword = document.getElementById('error-password');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener('click', (e) => {
    testInput(firstName, errorFirstName, 'Please enter first name');
    testInput(lastName, errorLastName, 'Please enter last name');
    testEmail(email, erorrEmail);
    testInput(password, erorrPassword, 'Please enter your password');    
  
});


function testInput(input, erorr, message) {
    if (input.value == "") {
        erorr.querySelector('span').textContent = message;
        showWarning(erorr);
    } else {
        removeWarning(erorr);
    }
}

function testEmail(input, erorr) {
    if (input.value == '') {
        erorr.querySelector('span').textContent = 'Please enter your email';
        showWarning(erorr);
    } else {
        if (!emailPattern.test(input.value)) {
            erorr.querySelector('span').textContent = 'Please enter a valid email address';
            showWarning(erorr);
        } else {
            removeWarning(erorr);
        }
    }
}

function showWarning(element) {
    element.style.display = 'flex';
    element.classList.remove('warning');
    void element.offsetWidth;
    element.classList.add('warning');
}

function removeWarning(element) {
    element.style.display = 'none';
}