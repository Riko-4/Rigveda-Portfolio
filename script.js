// JavaScript to handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        alert(`Thank you ${name}! Your message has been sent.`);
        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
