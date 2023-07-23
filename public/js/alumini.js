var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    autoplay: {
      delay: 4000, // Set the autoplay delay to 4 seconds (adjust as needed)
      disableOnInteraction: false, // Autoplay will not be disabled after user interactions (optional)
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
  });