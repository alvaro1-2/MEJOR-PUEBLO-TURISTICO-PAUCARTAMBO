// scripts/lugares_turisticos.js

document.addEventListener('DOMContentLoaded', function () {

    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Variables
    var navbar = document.getElementById('navbar');
    var btnIrArriba = document.getElementById('btnIrArriba');
    var headerSection = document.querySelector('.header-section');

    // Función para manejar el scroll
    function handleScroll() {
        var scrollY = window.scrollY;

        // Cambiar el color del navbar al hacer scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Mostrar u ocultar el botón de "Ir Arriba"
        if (scrollY > 200) {
            btnIrArriba.classList.add('show');
        } else {
            btnIrArriba.classList.remove('show');
        }

        // Efecto Parallax en la sección de header
        headerSection.style.backgroundPosition = 'center calc(50% + ' + (scrollY * 0.5) + 'px)';
    }

    // Agregar el listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Animación al hacer clic en el botón de "Ir Arriba"
    btnIrArriba.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Animaciones con GSAP
    gsap.from('#navbar', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
    gsap.from('.header-content', { duration: 1.5, opacity: 0, y: 50, ease: 'power2.out' });

    // Animaciones con ScrollReveal
    ScrollReveal().reveal('.tourist-section', {
        delay: 200,
        distance: '50px',
        easing: 'ease-in',
        origin: 'bottom',
        interval: 200,
    });

    // Efecto Hover en los enlaces del navbar
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('mouseenter', function () {
            navLink.classList.add('animate__animated', 'animate__heartBeat');
        });
        navLink.addEventListener('mouseleave', function () {
            navLink.classList.remove('animate__animated', 'animate__heartBeat');
        });
    });

    // Mostrar/Ocultar detalles de los lugares turísticos
    function toggleDetails(id) {
        var details = document.getElementById(id);
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    }

    // Añadir evento a los botones de "Ver más detalles"
    var detailButtons = document.querySelectorAll('.btn.btn-primary');
    detailButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var detailsId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleDetails(detailsId);
        });
    });

    // Ejecutar la función de scroll al cargar la página para el estado inicial
    handleScroll();
});
