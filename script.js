document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let errorMessage = document.getElementById('errorMessage');

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // If validation is successful, proceed with form submission (e.g., send data to server)
    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    // Reset the form
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

document.querySelector('.custom-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#aboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
});