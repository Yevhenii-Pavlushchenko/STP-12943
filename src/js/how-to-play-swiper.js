import Swiper from 'swiper';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.how-to-play-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 24,
    initialSlide: 0,

    breakpoints: {
      1440: {
        enabled: false,
      },
    },
  });
});
