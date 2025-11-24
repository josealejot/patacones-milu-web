(function ($) {
    "use strict";

    // 1. Spinner (Cargando...)
    // Desaparece suavemente cuando la página termina de cargar
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // 2. WowJS (Animaciones al hacer scroll)
    new WOW().init();

    // 3. Sticky Navbar (Barra de navegación pegajosa)
    // Se oscurece y se queda fija al bajar más de 45px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // 4. Menú desplegable (Dropdown) al pasar el mouse
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // 5. Botón "Volver Arriba"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // 6. Configuración de contadores (Facts)
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // 7. Carrusel de Testimonios (Si decides usarlo en el futuro)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

})(jQuery);

/* ===============================================================
   8. LÓGICA DE ZOOM DE IMÁGENES (El Modal del Menú)
   Esta función debe estar fuera del bloque jQuery para ser global
   ===============================================================
*/
function showImage(imgElement) {
    // Verifica si el modal existe en la página (solo en menu.html)
    var modalElement = document.getElementById('imageModal');
    
    if (modalElement) {
        // 1. Captura la ruta de la imagen pequeña y su descripción
        var src = imgElement.src;
        var alt = imgElement.alt;
        
        // 2. Asigna esos datos a la imagen grande dentro del modal
        document.getElementById('modalImage').src = src;
        document.getElementById('modalTitle').innerText = alt;
        
        // 3. Usa Bootstrap para mostrar el modal
        var myModal = new bootstrap.Modal(modalElement);
        myModal.show();
    } else {
        console.log("El modal de imagen no está presente en esta página.");
    }
}
