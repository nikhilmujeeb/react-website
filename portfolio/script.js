document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#filters button');
    const items = document.querySelectorAll('#portfolio-items .portfolio-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === '*' || item.classList.contains(filter.slice(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        document.getElementById('feedback').textContent = 'Please fill out all fields.';
        document.getElementById('feedback').style.color = 'red';
    } else {
        document.getElementById('feedback').textContent = 'Thank you for your message!';
        document.getElementById('feedback').style.color = 'green';
        document.getElementById('contactForm').reset();
    }
});

// JavaScript to handle the back-to-top button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });
});
