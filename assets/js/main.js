const navToggle = () => {
    const navicon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.top-navigation-bar');
    const navItem = document.querySelectorAll('.top-navigation-item');
    navicon.addEventListener('click', () => {
        //Toggle Class
        nav.classList.toggle('active');

        //nav item animation
        navItem.forEach((navItem, index) => {
            if (navItem.style.animation)
                navItem.style.animation = '';
            else
                navItem.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });

        //nav icon animation
        navicon.classList.toggle('toggle');
    });
}
navToggle();

const scrollUpBtn = document.querySelector('#scrollUp');
const progressBar = document.querySelector('#progress-bar');
window.onscroll = () => {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 20 || winScroll > 20) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Animations using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target elements to animate
const targets = document.querySelectorAll('.fade-in-section, .card, .category-box, .timeline-item, h2, .intro-wrap > *');
targets.forEach((el) => {
    el.classList.add('fade-in-section');
    observer.observe(el);
});
