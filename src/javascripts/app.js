import './modules'

(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


    $('#section-scroll').hover(function() {
        $(this).addClass('animated infinite pulse');
    }, function() {
        $(this).removeClass('animated infinite pulse');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    //Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin: 100,
        center: true,
        autoplay: true,
        autoWidth: true,
        autoplayTimeout: 2000
    });

    $("#formulario_contato").validate({
        // Define as regras

        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            assunto: {
                required: true
            },
            mensagem: {
                required: true
            }

        },
        // Define as mensagens de erro para cada regra
        messages: {
            nome: {
                required: "Por favor, informe seu nome."
            },
            email: {
                required: "Por favor, informe seu e-mail.",
                email: "Por favor, informe um e-mail válido."
            },
            assunto: {
                required: "Por favor, informe o assunto dessa mensagem."
            },
            mensagem: {
                required: "Por favor, digite sua mensagem."
            }

        },

        highlight: function(element) {
            $(element).addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
})(jQuery);
