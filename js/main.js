$(document).ready(function () {
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1200,
    autoplay: true,
    autoplayTimeout: 10000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
});

$("#project-slider").owlCarousel({
  loop: true,
  nav: false,
  items: 2,
  dots: true,
  smartSpeed: 800,
  center: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 8,
      center: true,
    },
  },
});

$("#reviews").owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 900,
  items: 1,
  margin: 24,
  autoplay: true,
  autoplayTimeout: 4000,
});
