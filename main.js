// ................... Show NavBar & unable Scroll .................//

const menuBtn = document.querySelector('.menu-btn-container');
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const noScroll = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');
let navShown = false;

// function to hide the menu and restore body scroll
function closeMenu() {
  nav.classList.remove('show-menu');
  btn.classList.remove('menu-active');
  noScroll.classList.remove('no-scroll');
  navShown = false;
}

// function to show the menu and remove body scroll
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

// function calling the close menu function each time a menu link is clicked
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

// Use object to store Article data
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
    title: ['Professional Art Printing Data'],
    titleDesk: ['Professional Art <br/> Printing Data', 'Data Dashboard Healthcare', 'Website Protfolio', 'Professional Art <br/> Printing Data', 'Data Dashboard Healthcare', 'Website Protfolio'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    technologies: ['html', 'bootstrap', 'Ruby'],
    btnText: 'See Project',
  },
];

// create first article markup from scratch
const firstArticle = document.createElement('article'); // article container
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
articleBtn.classList.add('article-btn', 'button', 'show-modal');
articleBlock.appendChild(articleBtn);

// ...........Multiple cards...................

const mediaQuery = matchMedia('(min-width: 768px)');

for (let count = 0; count < 6; count += 1) {
  const workCard = document.createElement('div'); // card container
  workCard.classList.add('work-card', 'flex', 'flex-col', 'end-col-left');
  workGrid.appendChild(workCard);
  const cardArticle = document.createElement('article'); // card article
  cardArticle.classList.add('card-article', 'flex', 'flex-col');
  workCard.appendChild(cardArticle);
  const cardBlock = document.createElement('div'); // card text block
  cardBlock.classList.add('card-block', 'flex', 'flex-col');
  cardArticle.appendChild(cardBlock);
  const cardHeading = document.createElement('header'); // card title
  cardHeading.classList.add('article-title');

  // Use condition to display different type of titles depending on the device
  if (mediaQuery.matches) {
    cardHeading.innerHTML = `<h2>${articlesData[1].titleDesk[count]}</h2>`;
    cardBlock.appendChild(cardHeading);
  } else {
    cardHeading.innerHTML = `<h2>${articlesData[1].title}</h2>`;
    cardBlock.appendChild(cardHeading);
  }
  const cardDesc = document.createElement('p'); // card description
  cardDesc.classList.add('card-art-desc');
  cardDesc.textContent = `${articlesData[1].description}`;
  cardBlock.appendChild(cardDesc);
  const cardTags = document.createElement('ul'); // card tags
  cardTags.classList.add('card-links', 'tags', 'flex');
  cardBlock.appendChild(cardTags);
  articlesData[1].technologies.forEach((item) => { // loop to display each tag
    const tag = document.createElement('li');
    tag.className = 'card-tag';
    const cardLink = document.createElement('a');
    cardLink.href = '#';
    cardLink.innerText = item;
    tag.appendChild(cardLink);
    cardTags.append(tag);
  });
  const cardBtn = document.createElement('button');// card button
  cardBtn.classList.add('card-btn', 'button', 'show-modal');
  cardBtn.textContent = `${articlesData[1].btnText}`;
  workCard.appendChild(cardBtn);
}

// ................. The Modal ...................

const modalData = {
  title: ['Multi Post Stories', 'Keeping track of hundreds  of components website'],
  tags: ['html', 'bootstrap', 'Ruby on rails'],
  images: ['./assets/images/modal-mobile.svg', './assets/images/modal-desktop.svg'],
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  btnClass: ['modal-btn1 button flex', 'modal-btn2 button flex'],
  btnImg: ['./assets/images/modal-first-btn-icon.svg', './assets/images/modal-second-btn-icon.svg'],
  btnLink: ['#', '#'],
  btnText: ['See Live', 'See Source'],
  btnAlt: ['Live link icon', 'Github icon'],
  closeBtnData: {
    class: ['modal-close-btn', 'modal-btn-icon'],
    imgSrc: './assets/images/modal-close-btn.svg',
    imgAlt: 'Close popup icon',
    role: 'button',
  },
};

const modal = document.querySelector('.modal');

const modalContainer = document.createElement('div'); // modal container
modalContainer.classList.add('modal-container', 'flex', 'flex-col');
modal.appendChild(modalContainer);

const modalHeader = document.createElement('header'); // modal Header
modalHeader.classList.add('modal-header', 'flex', 'flex-col');
modalContainer.appendChild(modalHeader);

const modalHeading = document.createElement('h1'); // modal Main Title
modalHeading.classList.add('modal-title');
modalHeader.appendChild(modalHeading);

const modalList = document.createElement('ul'); // Modal tag list
modalList.classList.add('modal-tags', 'flex');
modalHeader.appendChild(modalList);

// create list items
for (let count = 0; count <= modalData.tags.length - 1; count += 1) {
  modalList.innerHTML += `<li class="modal-tag">${modalData.tags[count]}</li>`;
}

const modalArticle = document.createElement('div'); // modal artcile (Text and picture)
modalArticle.classList.add('modal-article', 'flex', 'flex-col');
modalContainer.appendChild(modalArticle);

const modalBlock = document.createElement('div'); // Modal first block
modalBlock.classList.add('modal-block');
modalArticle.appendChild(modalBlock);

forEach(element in modalData){
  console.log(element)
}