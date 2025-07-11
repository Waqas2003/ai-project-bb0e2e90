// Add event listener to hero button
document.querySelector('.hero button').addEventListener('click', function() {
    alert('Learn more about Nature!');
});

// Add event listener to contact form
document.querySelector('#contact form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});