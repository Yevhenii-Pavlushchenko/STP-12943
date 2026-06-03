import Swiper from 'swiper';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
  {
    title: 'Enter the Arena',
    text: 'Start each run in a confined space filled with incoming enemies.',
  },
  {
    title: 'Control Movement',
    text: 'Dodge attacks and reposition constantly to stay alive.',
  },
  {
    title: 'Attack Automatically',
    text: 'Weapons fire continuously, allowing focus on movement and strategy.',
  },
  {
    title: 'Choose Upgrades',
    text: 'Select power-ups during the run to enhance abilities.',
  },
  {
    title: 'Last Longer',
    text: 'Survive waves to reach higher difficulty levels',
  },
];

const swiper = new Swiper('#how-to-play-swiper', {
  modules: [Pagination, Mousewheel, Keyboard],

  direction: 'vertical',
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 8,
  loop: true,
  grabCursor: true,

  mousewheel: {
    invert: false,
  },

  keyboard: {
    enabled: true,
  },

  observer: true,
  observeParents: true,
  watchOverflow: true,

  pagination: {
    el: '[data-how-to-play-pagination]',
    clickable: true,
  },

  on: {
    init: function () {
      setTimeout(() => {
        this.update();
      }, 200);

      updateContent(this.realIndex);
    },
    slideChange: function () {
      updateContent(this.realIndex);
    },
  },
});

function updateContent(index) {
  const titleEl = document.querySelector('[data-how-to-play-title]');
  const textEl = document.querySelector('[data-how-to-play-text]');

  if (slidesData[index] && titleEl && textEl) {
    titleEl.textContent = slidesData[index].title;
    textEl.textContent = slidesData[index].text;
  }
}
