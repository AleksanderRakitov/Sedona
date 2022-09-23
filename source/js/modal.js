let modalFail = document.querySelector(".modal__fail");
let modalSuccess = document.querySelector(".modal__success");
let form = document.querySelector(".yourself__form");
let input = form.querySelectorAll(".item__input");
let modalClose = form.querySelectorAll(".modal__close");
let closeFail = document.querySelector(".button__modal-fail");
let closeSuccess = document.querySelector(".button__modal-success");
let formName = form.querySelector(".item__input-name");
let formLastName = form.querySelector(".item__input-lastname");
let formPhone = form.querySelector(".item__input-phone");
let formEmail = form.querySelector(".item__input-email");
let buttonForm = form.querySelector(".button__form");

form.addEventListener('submit', (evt) => {
  if(!formName.value || !formPhone.value) {
    evt.preventDefault();
    modalFail.classList.add('modal--show');
    modalSuccess.classList.remove('modal--show');
  } else {
    evt.preventDefault();
    modalFail.classList.remove('modal--show');
    modalSuccess.classList.add('modal--show');
  }
});

closeFail.addEventListener('click', (e) => {
  e.preventDefault();
  modalFail.classList.remove('modal--show');
});

closeSuccess.addEventListener('click', (e) => {
  e.preventDefault();
  modalSuccess.classList.remove('modal--show');
});

modalFail.addEventListener('click', (e) => {
  modalFail.classList.remove('modal--show');
});

modalSuccess.addEventListener('click', (e) => {
  modalSuccess.classList.remove('modal--show');
});

window.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    if (modalSuccess.classList.contains('modal--show')) {
      evt.preventDefault();
      modalSuccess.classList.remove('modal--show');
    }
  }
});

window.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    if (modalFail.classList.contains('modal--show')) {
      evt.preventDefault();
      modalFail.classList.remove('modal--show');
    }
  }
});
