$(document).ready(function() {
    $('.menu__burger').click(function (e) { 
      $('.menu__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
    });
    $('.slider__items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            infinite: true,
            autoplay : true
          }
        },
        {
          breakpoint: 1182,
          settings: {
            arrows: false,
          }
        }],
    });
});