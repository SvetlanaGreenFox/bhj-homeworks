const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modal.classList.add('modal_active');

const modalClose = Array.from(document.querySelectorAll('.modal__close'));
modalClose.forEach((elem) => {
  elem.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  });
});

const btnSuccess = document.querySelector('.show-success');
btnSuccess.addEventListener('click', () => {
  modalSuccess.classList.add('modal_active');
});