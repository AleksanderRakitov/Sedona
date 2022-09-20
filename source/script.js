let likes = document.querySelector('.button__likes');
let numberLikes = document.querySelector('.figure__likes');

likes.onclick = function () {
  if (likes.classList.contains('.added')) {
    numberLikes.textContent--;
  } else {
    numberLikes.textContent++;
  }
  likes.classList.toggle('.added');
}

let modal = document.querySelector(".modal");
let modalFail = document.querySelector(".modal__fail");
let modalSucces = document.querySelector(".modal__success");
let form = document.querySelector(".yourself__form");
let modalClose = modal.querySelector(".modal__close");
let formName = form.querySelector(".item__input-name");
let formLastname = form.querySelector(".item__input-lastname");
let formPhone = form.querySelector(".item__input-phone");
let formEmail = form.querySelector(".item__input-email");


form.addEventListener('submit', (evt) => {
  if(!formName.value || !formLastname.value || !formPhone.value || !formEmail.value) {
    evt.preventDefault();
    modalFail.classList.add("modal--show");
    modalSuccess.classList.remove("modal--show");
  } else {
    modalSuccess.classList.add("modal--show");
    modalFail.classList.remove("modal--show");
  }
});

window.addEventListener('keydown', (evt) => {
  if(evt.key === "Escape") {
    if(modal.classList.contains("modal--show")) {
      evt.preventDefault();
      modal.classList.remove("modal--show");
    }
  }
});

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});
