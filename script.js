// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message. I will get back to you soon!');
        form.reset();
    });
});
