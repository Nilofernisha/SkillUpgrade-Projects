

function validateForm() {
    let isValid = true;

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

   
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email address.';
        isValid = false;
    }

   
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    return isValid;
}
