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
          // screens greater than >= value
          breakpoint: 1200,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 700,
            duration: 0.25
          }
    }]
})
