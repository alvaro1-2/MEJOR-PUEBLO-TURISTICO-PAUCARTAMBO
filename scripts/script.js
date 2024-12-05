// scripts/script.js

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Al cargar el documento
$(document).ready(function() {
    // Cambiar el color del navbar al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // Mostrar u ocultar el botón de "Ir Arriba"
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#btnIrArriba').fadeIn();
        } else {
            $('#btnIrArriba').fadeOut();
        }
    });

    // Animación al hacer clic en el botón de "Ir Arriba"
    $('#btnIrArriba').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Animaciones con GSAP
    gsap.from('#navbar', { duration: 1, y: -100, opacity: 0, ease: 'bounce' });
    gsap.from('.header-content', { duration: 1.5, opacity: 0, y: 50, ease: 'power2.out' });

    // Animaciones con ScrollReveal
    ScrollReveal().reveal('.section-title', { delay: 200, distance: '50px', easing: 'ease-in', origin: 'bottom' });
    ScrollReveal().reveal('.parallax-section .container', { delay: 400, distance: '50px', easing: 'ease-in', origin: 'bottom' });
    ScrollReveal().reveal('.col-md-6', { delay: 300, distance: '50px', easing: 'ease-in', interval: 200, origin: 'bottom' });

    // Efecto Parallax en la sección de header
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        $('.header-section').css('background-position', 'center calc(50% + ' + (scrollTop * 0.5) + 'px)');
    });

    // Efecto Hover en los enlaces del navbar
    $('.nav-link').hover(
        function() {
            $(this).addClass('animate__animated animate__heartBeat');
        },
        function() {
            $(this).removeClass('animate__animated animate__heartBeat');
        }
    );

    // Animaciones para la Sección del Documento de Reconocimiento
    ScrollReveal().reveal('#documento .section-title', { delay: 200, distance: '50px', easing: 'ease-in', origin: 'bottom' });
    ScrollReveal().reveal('#documento .pdf-container', { delay: 400, distance: '50px', easing: 'ease-in', origin: 'bottom' });
    ScrollReveal().reveal('#documento .btn', { delay: 600, distance: '50px', easing: 'ease-in', origin: 'bottom' });
});
