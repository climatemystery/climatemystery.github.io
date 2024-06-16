// script.js (example for form validation)

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form inputs and handle submission
    // Example:
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Example: send form data to server
        console.log('Form submitted:', name, email, message);
        alert('Message sent successfully!');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
