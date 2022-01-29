$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,


        responsive: {
            0: {
                items: 1.25
            },
            600: {
                items: 2.25
            },
            1000: {
                items: 4.25
            }
        }



    });
});


