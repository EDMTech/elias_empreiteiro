const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.sidebar .nav-item');
const up = document.querySelector('.up');
const ups = document.querySelectorAll('div .up');

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        navItem.classList.add('active');
    });
});

ups.forEach(up => {
    up.addEventListener('click', () => {
        ups.forEach(up => {
            up.classList.remove('active');
        });
        up.classList.add('active');
    });
});

// Preloader
$(window).on('load', function (){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({'overflow': 'visible'});
})

var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
      delay: 2000,
    disableOnInteraction: false,
  },
  loop: false,
  breakpoints: {
      0: {
      slidesPerView: 1,
    },
      320: {
      slidesPerView: 2,
    },
      640: {
      slidesPerView: 3,
    },
      1080: {
      slidesPerView: 4,
    },
      1280: {
      slidesPerView: 4,
    },
  },
});