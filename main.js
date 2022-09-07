// ................... Show NavBar & unable Scroll .................//
const menuBtn = document.querySelector('.menu-btn-container');
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const noScroll = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');
let navShown = false;

function closeMenu() {
  nav.classList.remove('show-menu');
  btn.classList.remove('menu-active');
  noScroll.classList.remove('no-scroll');
  navShown = false;
}

menuBtn.addEventListener('click', () => {
  if (!navShown) {
    nav.classList.add('show-menu');
    btn.classList.add('menu-active');
    noScroll.classList.add('no-scroll');
    navShown = true;
  } else {
    closeMenu();
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// .................... Dynamic Work section and Cards .......................

const workSection = document.querySelector('.work');
const workCont = document.createElement('div'); // work container
workCont.classList.add('work-container', 'limit');
workSection.appendChild(workCont);

const workHeader = document.createElement('div'); // work section header
workHeader.classList.add('work-title', 'limit-desk');
workCont.appendChild(workHeader);

const workHeading = document.createElement('h2');// section Title
workHeading.textContent = 'My Recent Works';
const workDiviser = document.createElement('span');
workHeader.appendChild(workHeading);
workHeader.appendChild(workDiviser);

const workGrid = document.createElement('div');// Grid container
workGrid.classList.add('grid', 'limit-desk');
workCont.appendChild(workGrid);

const articlesData = [
  {
    imgUrl: './assets/images/Img-Placeholder.png',
    imgAlt: 'illustration of a woman practising yoga',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry\'s standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    btnText: 'See Project',
  },

  {
    title: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    btnText: 'See Project',
  },
];

const firstArticle = document.createElement('article');
firstArticle.classList.add('main-article', 'flex', 'flex-col', 'flex-center');
workGrid.appendChild(firstArticle);

const articleImg = document.createElement('div');
articleImg.innerHTML = `<img src="${articlesData[0].imgUrl}" alt="${articlesData[0].imgAlt}"/>`;
articleImg.classList.add('article-img');
firstArticle.appendChild(articleImg);

const articleBlock = document.createElement('div');
articleBlock.classList.add('article-block', 'flex', 'flex-col', 'start-col');
firstArticle.appendChild(articleBlock);

const articleHead = document.createElement('header');
articleHead.classList.add('article-title');
articleHead.innerHTML = `<h2>${articlesData[0].title}</h2>`;
articleBlock.appendChild(articleHead);

const articleDesc = document.createElement('p');
articleDesc.classList.add('article-desc');
articleDesc.textContent = articlesData[0].description;
articleBlock.appendChild(articleDesc);

const listContainer = document.createElement('div');
articleBlock.appendChild(listContainer);

const tagList = document.createElement('ul');
tagList.classList.add('article-links', 'flex', 'start-row');
listContainer.appendChild(tagList);

for (let count = 0; count <= articlesData[0].technologies.length - 1; count += 1) {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');
  listLink.textContent = articlesData[0].technologies[count];
  listLink.classList.add('article-link');
  listLink.setAttribute('href', '#');
  listItem.appendChild(listLink);
  tagList.appendChild(listItem);
}

const articleBtn = document.createElement('button');
articleBtn.textContent = `${articlesData[0].btnText}`;
articleBtn.classList.add('article-btn', 'button');
articleBlock.appendChild(articleBtn);

// ...........Multiple cards...................

for (let count = 0; count < 6; count += 1) {
  const workCard = document.createElement('div'); // card container
  workCard.classList.add('work-card', 'flex', 'flex-col', 'end-col-left');
  workGrid.appendChild(workCard);
  const cardArticle = document.createElement('article'); // card article
  cardArticle.classList.add('card-article', 'flex', 'flex-col');
  workCard.appendChild(cardArticle);
  const cardBlock = document.createElement('div'); // card text block
  cardBlock.classList.add('card-block');
  cardArticle.appendChild(cardBlock);
  const cardHeading = document.createElement('header'); // card title
  cardHeading.classList.add('article-title');
  cardHeading.innerHTML = `<h2>${articlesData[1].title}</h2>`;
  cardBlock.appendChild(cardHeading);
  const cardDesc = document.createElement('p'); // card description
  cardDesc.classList.add('card-art-desc');
  cardDesc.textContent = `${articlesData[1].description}`;
  cardBlock.appendChild(cardDesc);
  const cardTags = document.createElement('ul'); // card tags
  cardTags.classList.add('card-links', 'tags', 'flex');
  cardBlock.appendChild(cardTags);
  articlesData[1].technologies.forEach((item) => { // loop to display each tag
    const tag = document.createElement('li');
    const cardLink = document.createElement('a');
    cardLink.href = '#';
    cardLink.innerText = item;
    tag.appendChild(cardLink);
    cardTags.append(tag);
  });
  const cardBtn = document.createElement('button');// card button
  cardBtn.classList.add('card-btn', 'button');
  cardBtn.textContent = `${articlesData[1].btnText}`;
  workCard.appendChild(cardBtn);
}
