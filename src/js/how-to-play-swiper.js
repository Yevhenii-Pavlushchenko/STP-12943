import Swiper from 'swiper';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.how-to-play-slider', {
    // Базовые настройки для мобилок
    slidesPerView: 'auto' /* Карточки займут ровно свои 206px */,
    centeredSlides: true /* Активная карточка будет по центру экрана */,
    spaceBetween: 24 /* Гэп 24px между слайдами */,
    initialSlide: 0 /* Стартуем с первой карточки */,

    // Отключаем Swiper на десктопе, чтобы работал чистый CSS-ряд
    breakpoints: {
      1440: {
        enabled: false /* Полностью выключает логику слайдера на 1440px+ */,
      },
    },
  });
});
