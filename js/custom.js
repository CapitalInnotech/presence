

$(document).ready(function () {



    //Client Slider

    $('.client-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,

            },
            1000: {
                items: 3,
            }
        }
    })

});



