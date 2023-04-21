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


// POPUP-WINDOW SECTION

const projectData = [
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    image: './Icons/Card/card_bg.png',
    imgPopDes: './Icons/Snapshoot-Portfolio.svg',
    imgPopMob: './Icons/Snapshoot-Portfolio2.svg',
    head: 'Multi-Post-Stories',
    headPop: 'Keeping track of hundreds of components',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960 with the relea Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    head2: 'Gain &#43; Glory',
    tags: ['Ruby on Rails', 'CSS', 'JavaSCript', 'HTML'],
    tags2: ['Codepen', 'Github', 'Javascript', 'Boostrap', 'Terminal'],
    tagMob: ['Ruby on Rails', 'CSS', 'Javascript'],

  },
];

const projectPage = document.querySelector('#page');
for (let i = 0; i < projectData.length; i += 1) {
  projectPage.innerHTML += `
  <div class="card flex column">
  <img src="${projectData[i].image}" alt="card-image1" />
  <div class="card-details flex column">
    <h3>${projectData[i].head}</h3>
    <h3>${projectData[i].head2}</h3>
    <ul class="list flex">
      <li>${projectData[i].tags[0]}</li>
      <li>${projectData[i].tags[1]}</li>
      <li>${projectData[i].tags[2]}</li>
      <li>${projectData[i].tags[3]}</li>
    </ul>
    <button type="button" id="btn-${i}">See project</button>
  </div>
</div>
  `;
}

