// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example interactivity: Highlight navigation link on hover
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'blue';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});

// Adding an event listener to the submit button to display a message when clicked
document.querySelector('button[type="submit"]').addEventListener('click', function () {
    alert('Your service request has been submitted successfully!');
});