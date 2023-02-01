$(".owl-carousel-hero").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplaySpeed: 6000,
  rtl: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel-testimonials").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplaySpeed: 6000,
  rtl: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
