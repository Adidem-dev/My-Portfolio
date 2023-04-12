const button = document.querySelector('.hamburger');
const element = document.querySelector('.nav-bar_desktop');
const list = document.querySelectorAll('.nav-bar_desktop a, .nav-bar_desktop img');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', () => {
  element.style.display = 'flex';
  button.style.display = 'none';
  overlay.classList.remove('hidden');
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', () => {
    element.style.display = 'none';
    button.style.display = 'block';
    overlay.classList.add('hidden');
  })
}