// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulated form submission success
    alert("Thank you! Your message has been sent.");
    this.reset();
});
