(function ($) {
  'use strict';

  // Preloader Active Code
  $(window).on('load', function () {
    $('#preloader').queue(function () {
      $(this).remove();
    });
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $('.site-header-sticky').addClass('scrolling');
    } else {
      $('.site-header-sticky').removeClass('scrolling');
    }
    if ($(window).scrollTop() >= 200) {
      $('.site-header-sticky.scrolling').addClass('reveal-header');
    } else {
      $('.site-header-sticky.scrolling').removeClass('reveal-header');
    }
  });

  // Isotop Projects Filter
  $(window).on('load', function () {
    const $container = $('.projectsContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        queue: true,
      },
    });

    $('.project-menu li').click(function () {
      $('.project-menu .active').removeClass('active');
      $(this).addClass('active');
      const selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          queue: true,
        },
      });
      return false;
    });
  });

  // Client Slider
  $('.client-slider').owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 50,
    dots: true,
    dotsEach: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // Partner Slider
  $('.partner-slider').owlCarousel({
    items: 6,
    loop: true,
    autoplay: true,
    smartSpeed: 1500,
    margin: 100,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 2,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Scroll Down Section
  $('.scroll-down').click(function () {
    $('html, body').animate(
      { scrollTop: $('section.experience-area').offset().top },
      500,
      'linear'
    );
    return false;
  });
})(jQuery);
