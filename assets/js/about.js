// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserverOptions = {
    threshold: 0.5,
    rootMargin: "0px"
};

const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
            observer.unobserve(bar);
        }
    });
}, skillObserverOptions);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});
