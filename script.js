document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('#nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Check for a fixed header
                const headerHeight = document.getElementById('header').offsetHeight;
                const offsetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close the mobile menu after clicking a link
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // --- Sticky Header on Scroll ---
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#161b22';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.4)';
        } else {
            header.style.backgroundColor = '#0d1117';
            header.style.boxShadow = 'none';
        }
    });

});