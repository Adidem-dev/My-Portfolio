const button = document.querySelector('.hamburger');
const element = document.querySelector('.nav-bar_desktop');
const list = document.querySelectorAll('.nav-bar_desktop a, .nav-bar_desktop img');
const overlay = document.querySelector('.overlay');

button.addEventListener('click', () => {
  element.style.display = 'flex';
  button.style.display = 'none';
  overlay.classList.remove('hidden');
});

for (let i = 0; i < list.length; i += 1) {
  list[i].addEventListener('click', () => {
    element.style.display = 'none';
    button.style.display = 'block';
    overlay.classList.add('hidden');
  });
}

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