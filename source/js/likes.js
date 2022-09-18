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
