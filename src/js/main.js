jQuery(function($){
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // initialSlide: 3,
        slidesPerView: 4,
        // centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
        // loop: 1,
    });
    
    $(".our-watches-nav > a").on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});
