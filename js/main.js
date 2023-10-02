export {backend_url, setLoading, offLoading };
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
(function ($) {
    "use strict";

    const backend_url = "https://thetechverse.pythonanywhere.com";

    function setLoading(msg) {
        document.getElementById('spinner').classList.add('show');
        document.getElementById('loding_status').innerHTML = msg;
    }
    function offLoading() {
        document.getElementById('spinner').classList.remove('show');
        document.getElementById('loding_status').innerHTML = "Loading";
    }

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
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


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

