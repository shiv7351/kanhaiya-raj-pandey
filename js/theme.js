document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon(savedTheme === 'dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        body.className = isDark ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', isDark ? 'light-mode' : 'dark-mode');
        updateThemeIcon(!isDark);
    });

    function updateThemeIcon(isDark) {
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        moonIcon.style.display = isDark ? 'none' : 'inline';
        sunIcon.style.display = isDark ? 'inline' : 'none';
    }
});
