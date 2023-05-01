const button = document.querySelector('.hamburger');
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

/* Form Validation Section */

const email = document.getElementById('mail');
const form = document.getElementById('form1');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    document.getElementById('error').innerText = 'Error, Email must be lowercase. Form is not sent';
  } else {
    document.getElementById('error').innerText = '';
    form.submit();
  }
});
