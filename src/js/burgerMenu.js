const openBtnEl = document.querySelector('[data-menu-open]');
const closeBtnEl = document.querySelector('[data-menu-close]');
const modalViewEl = document.querySelector('[data-visible]');
const navListEl = document.querySelector('[data-menu-navigation]');

openBtnEl.addEventListener('click', () => {
  modalViewEl.setAttribute('data-visible', 'open');
  closeBtnEl.addEventListener('click', handleClose);
  document.addEventListener('keydown', handleEscClose);
  document.body.classList.add('no-scroll');
});

const handleClose = () => {
  modalViewEl.setAttribute('data-visible', 'close');
  document.body.classList.remove('no-scroll');
  closeBtnEl.removeEventListener('click', handleClose);
  document.removeEventListener('keydown', handleEscClose);
};

const handleEscClose = e => {
  if (e.key === 'Escape') handleClose();
};

navListEl.addEventListener('click', e => {
  if (e.target.tagName === 'A') handleClose();
});
