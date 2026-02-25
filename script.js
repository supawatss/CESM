document.addEventListener('DOMContentLoaded', () => {
    // Simple Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Header scroll reduction
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 3rem';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.padding = '1rem 3rem';
            nav.style.background = 'rgba(255, 255, 255, 0.85)';
        }
    });
});
