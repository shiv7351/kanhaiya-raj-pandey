// Theme Toggle
const themeToggle = document.querySelector('.theme-btn');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate info cards
gsap.utils.toArray('.info-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate social boxes
gsap.utils.toArray('.social-box').forEach((box, index) => {
    gsap.from(box, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: box,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate quote boxes
gsap.utils.toArray('.quote-box').forEach((box, index) => {
    gsap.from(box, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.3,
        scrollTrigger: {
            trigger: box,
            start: 'top 85%',
            end: 'top 15%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Add floating animation to quote boxes
document.querySelectorAll('.quote-box').forEach((box, index) => {
    gsap.to(box, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.5
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const parallaxSpeed = 0.5;

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});
