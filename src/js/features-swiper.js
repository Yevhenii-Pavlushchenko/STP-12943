import Swiper from 'swiper';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const featuresSwiper = new Swiper('#features-swiper', {
  modules: [Pagination, Mousewheel, Keyboard],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '[data-features-pagination]',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: {
    forceToAxis: true,
  },
});
