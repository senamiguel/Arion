const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
        },
        480: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        640: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
        1024: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        }
    },
    spaceBetween: 30,
    // If we need pagination
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
        delay: 5000,
      },
    
  });
