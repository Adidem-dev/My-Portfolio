const button = document.querySelector('.hamburger');
// const element = document.querySelector('.nav-bar-mobile');
const close = document.querySelector('.x-mark');
const menuList = document.querySelector('.nav-bar-mobile');
const list = document.querySelectorAll('.nav-bar-mobile a');
const overlay = document.querySelector('.overlay');
const { body } = document;

button.addEventListener('click', () => {
  menuList.style.display = 'flex';
  button.style.display = 'none';
  close.style.display = 'block';
  overlay.classList.remove('hidden');
  body.style.overflow = 'hidden';
});

const quit = () => {
  menuList.style.display = 'none';
  button.style.display = 'block';
  close.style.display = 'none';
  overlay.classList.add('hidden');
  body.style.overflow = 'scroll';
};
close.addEventListener('click', () => {
  quit();
});

if (window.innerWidth < 767) {
  list.forEach((item) => {
    item.addEventListener('click', () => {
      quit();
    });
  });
}


        

          


