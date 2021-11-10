new Glider(document.querySelector('.project__glider'), {
    slidesToShow: 1,
    dots: '#resp-dots',
    draggable: true,
    scrollLock: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
          // screens greater than >= 1200px
          breakpoint: 1200,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1,
            slidesToScroll: 'auto',
            itemWidth: 3000,
            duration: 0.25
          }
    },
    {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow:  'auto',
          slidesToScroll: 'auto',
          duration: 0.25
        }
      }
]
})
