$(document).ready(function () {
    $('.header-logo').addClass('bounce');

    $('.video-box').addClass("hidden").viewportChecker({
        classToAdd: 'visible active swim',
        offset: 100
    });

    $('.clouds').addClass("hidden").viewportChecker({
        classToAdd: 'visible active anim',
        offset: 100
    });

    $('.clock').addClass("hidden").viewportChecker({
        classToAdd: 'visible active jump',
        offset: 100
    });

    if($('div').hasClass('reviews-slider')){
        $('.reviews-slider').slick({
            fade: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            dots: false,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            touchThreshold: 100,
            speed: 700,
        });
    }
});



