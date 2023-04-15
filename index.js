const button = document.querySelector('.hamburger');
//const element = document.querySelector('.nav-bar-mobile');
const close = document.querySelector('.x-mark');
const list = document.querySelectorAll('.nav-bar-mobile')
const overlay = document.querySelector('.overlay');
const { body } = document;

button.addEventListener('click', () => {
  list.style.display = 'flex';
  button.style.display = 'none';
  close.style.display = 'block';
  overlay.classList.remove('hidden');
  body.style.overflow = 'hidden';
});


  // list.addEventListener('click', () => {
  //   element.style.display = 'none';
  //   button.style.display = 'block';
  //   close.style.display = 'none';
  //   overlay.classList.add('hidden')
  //   body.style.overflow = 'scroll';
  // })