$(document).ready(function(){
$('.slider').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'linear',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
   
   
    // rows: 2
    swipeToSlide: true,
    dots: false,
    infinite: true, 
    variableWidth: true,

    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                 centerMode: true,
            }
        }
    ]
});

});

