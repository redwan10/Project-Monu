$(document).ready(function(){
// Write code here

// Mobile menu
jQuery('#mobile-menu-active').meanmenu({
  meanMenuContainer: '.mobile-menu',
  meanScreenWidth: "991"
});

// counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slick slider
$('.slider-active').slick({
    arrows: false,
    autoplay: true
  });

//   review slider
$('.review-slider').slick({
    arrows: false,
    autoplay: true,
    dots: true
  });

// Brand slider
  $('.brand-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
  });

  // scroll up
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-arrow-circle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  // wow js
  new WOW().init();
});