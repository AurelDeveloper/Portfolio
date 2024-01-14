$(document).ready(function(){
    $('.files-box').slick({
        dots: false, /* Disable navigation dots */
        infinite: false, /* Disable infinite loop */
        speed: 300,
        slidesToShow: 1, /* Show one slide at a time */
        slidesToScroll: 1, /* Scroll one slide at a time */
        adaptiveHeight: true,
        centerMode: true, /* Enable center mode */
        centerPadding: '60px', /* Padding on the sides of the center slide. Adjust as needed. */
        arrows: false, /* Disable previous/next arrows */
    });
});