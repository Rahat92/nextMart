// jQuery start
$(document).ready(function () {
  //    banner owl carousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    autoplayTimeout: 3000,
    navText: [
      "<i class='fas fa-angle-left' aria-hidden='true'></i>",
      "<i class='fas fa-angle-right' aria-hidden='true'></i>",
    ],
    autoplaySpeed: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
      },
    },
  });
});
