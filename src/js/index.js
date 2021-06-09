$(function () {
  $('.gallery__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="sl icon-sl"></span>',
    nextArrow: '<span class="sr icon-sr"></span>',
    asNavFor: '.gallery__slider-nav'
  })

  $('.gallery__slider-nav').slick({
    asNavFor: '.gallery__slider-for',
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })

  const pageMediaArrows = [
    '<span class="icon-media-arrow-left"></span>',
    '<span class="icon-media-arrow-right"></span>'
  ]

  $('.page-media__slider').owlCarousel({
    items: 1,
    margin: 50,
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    nav: true,
    navText: pageMediaArrows
  })
})
