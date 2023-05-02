// ................... Show NavBar & unable Scroll .................//

const menuBtn = document.querySelector(".menu-btn-container");
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const noScroll = document.querySelector("body");
const navLink = document.querySelectorAll(".nav-link");
let navShown = false;

// function to hide the menu and restore body scroll
function closeMenu() {
  nav.classList.remove("show-menu");
  btn.classList.remove("menu-active");
  noScroll.classList.remove("no-scroll");
  navShown = false;
}

// function to show the menu and remove body scroll
menuBtn.addEventListener("click", () => {
  if (!navShown) {
    nav.classList.add("show-menu");
    btn.classList.add("menu-active");
    noScroll.classList.add("no-scroll");
    navShown = true;
  } else {
    closeMenu();
  }
});

// function calling the close menu function each time a menu link is clicked
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// .................... Dynamic Work section and Cards .......................

const workSection = document.querySelector(".work");
const workCont = document.createElement("div"); // work container
workCont.classList.add("work-container", "limit");
workSection.appendChild(workCont);

const workHeader = document.createElement("div"); // work section header
workHeader.classList.add("work-title", "limit-desk");
workCont.appendChild(workHeader);

const workHeading = document.createElement("h2"); // section Title
workHeading.textContent = "My Recent Works";
const workDiviser = document.createElement("span");
workHeader.appendChild(workHeading);
workHeader.appendChild(workDiviser);

const workGrid = document.createElement("div"); // Grid container
workGrid.classList.add("grid", "limit-desk");
workCont.appendChild(workGrid);

// Use object to store Article data

const firstProject = {
  image: "./assets/images/meal_master.jpg",
  imgAlt: "Meal Master home page screenshot",
  title: "Meal Master",
  shortDesc:
    "Web application for ordering food with user authentication and admin access.",
  description:
    "Meal Master is a full-stack web application for ordering food with user authentication and admin access. It is built using Rails and React enables a user to create an account, sign-in, order foods of their liking, and/or delete their orders.",
  technologies: ["Ruby", "Ruby on Rails", "React"],
  btnLink: [
    "https://mealmaster5.netlify.app/",
    "https://github.com/DaveZag/meal-master-frontend",
  ],
};

const projects = [
  {
    title: ["Professional Art Printing Data"],
    shortDesc: "Hello there",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: "./assets/images/meal_master.jpg",
    technologies: ["Ruby", "Ruby on Rails", "React"],
    btnLink: ["#", "#"],
  },
];

// create first article markup from scratch
const firstArticle = document.createElement("article"); // article container
firstArticle.classList.add("main-article", "flex", "flex-col", "flex-center");
workGrid.appendChild(firstArticle);

const articleImg = document.createElement("div");
articleImg.innerHTML = `<img src="${firstProject.image}" alt="${firstProject.imgAlt}"/>`;
articleImg.classList.add("article-img");
firstArticle.appendChild(articleImg);

const articleBlock = document.createElement("div");
articleBlock.classList.add("article-block", "flex", "flex-col", "start-col");
firstArticle.appendChild(articleBlock);

const articleHead = document.createElement("header");
articleHead.classList.add("article-title");
articleHead.innerHTML = `<h2>${firstProject.title}</h2>`;
articleBlock.appendChild(articleHead);

const articleDesc = document.createElement("p");
articleDesc.classList.add("article-desc");
articleDesc.textContent = firstProject.description;
articleBlock.appendChild(articleDesc);

const listContainer = document.createElement("div");
articleBlock.appendChild(listContainer);

const tagList = document.createElement("ul");
tagList.classList.add("article-links", "flex", "start-row");
listContainer.appendChild(tagList);

for (let count = 0; count <= firstProject.technologies.length - 1; count += 1) {
  const listItem = document.createElement("li");
  const listLink = document.createElement("a");
  listLink.textContent = firstProject.technologies[count];
  listLink.classList.add("article-link");
  listLink.setAttribute("href", "#");
  listItem.appendChild(listLink);
  tagList.appendChild(listItem);
}

const articleBtn = document.createElement("button");
articleBtn.textContent = "See Project";
articleBtn.classList.add("article-btn", "button", "show-modal");
articleBtn.addEventListener("click", () => {
  createPopup(firstProject);
});
articleBlock.appendChild(articleBtn);

// ...........Multiple cards...................

const createCard = (project) => {
  const workCard = document.createElement("div"); // card container
  workCard.classList.add("work-card", "flex", "flex-col", "end-col-left");
  workGrid.appendChild(workCard);
  const cardArticle = document.createElement("article"); // card article
  cardArticle.classList.add("card-article", "flex", "flex-col");
  workCard.appendChild(cardArticle);
  const cardBlock = document.createElement("div"); // card text block
  cardBlock.classList.add("card-block", "flex", "flex-col");
  cardArticle.appendChild(cardBlock);
  const cardHeading = document.createElement("header"); // card title
  cardHeading.classList.add("article-title");
  cardHeading.innerHTML = `<h2>${project.title}</h2>`;
  cardBlock.appendChild(cardHeading);

  const cardDesc = document.createElement("p"); // card description
  cardDesc.classList.add("card-art-desc");
  cardDesc.textContent = `${project.description}`;
  cardBlock.appendChild(cardDesc);
  const cardTags = document.createElement("ul"); // card tags
  cardTags.classList.add("card-links", "tags", "flex");
  cardBlock.appendChild(cardTags);
  project.technologies.forEach((item) => {
    // loop to display each tag
    const tag = document.createElement("li");
    tag.className = "card-tag";
    const cardLink = document.createElement("a");
    cardLink.href = "#";
    cardLink.innerText = item;
    tag.appendChild(cardLink);
    cardTags.append(tag);
  });
  const cardBtn = document.createElement("button"); // card button
  cardBtn.classList.add("card-btn", "button", "show-modal");
  cardBtn.textContent = "See Project";
  cardBtn.addEventListener("click", () => {
    createPopup(project);
  });
  workCard.appendChild(cardBtn);
};

projects.forEach((project) => {
  createCard(project);
});
// ................. The Modal ...................

const modalData = {
  btnClass: ["modal-btn1 button flex", "modal-btn2 button flex"],
  btnImg: [
    "./assets/images/modal-first-btn-icon.svg",
    "./assets/images/modal-second-btn-icon.svg",
  ],
  btnText: ["See Live", "See Source"],
  btnAlt: ["Live link icon", "Github icon"],
  closeBtnData: {
    class: ["modal-close-btn", "modal-btn-icon"],
    imgSrc: "./assets/images/modal-close-btn.svg",
    imgAlt: "Close popup icon",
    role: "button",
  },
};

const createPopup = (project) => {
  const modal = document.querySelector(".modal");

  const modalContainer = document.createElement("div"); // modal container
  modalContainer.classList.add("modal-container", "flex", "flex-col");
  modal.appendChild(modalContainer);

  const modalHeader = document.createElement("header"); // modal Header
  modalHeader.classList.add("modal-header", "flex", "flex-col");
  modalContainer.appendChild(modalHeader);

  const modalHeading = document.createElement("h1"); // modal Main Title
  modalHeading.classList.add("modal-title");
  modalHeading.innerHTML = `${project.title}`;
  modalHeader.appendChild(modalHeading);

  const modalList = document.createElement("ul"); // Modal tag list
  modalList.classList.add("modal-tags", "flex");
  modalHeader.appendChild(modalList);

  // create list items
  for (let count = 0; count <= project.technologies.length - 1; count += 1) {
    modalList.innerHTML += `<li class="modal-tag">${project.technologies[count]}</li>`;
  }

  const modalArticle = document.createElement("div"); // modal artcile (Text and picture)
  modalArticle.classList.add("modal-article", "flex", "flex-col");
  modalContainer.appendChild(modalArticle);

  const modalBlock = document.createElement("div"); // Modal first block
  modalBlock.classList.add("modal-block");
  modalBlock.innerHTML = ` <img class="modal-img" src="${project.image}" alt="Illustration of number ten" />`;
  modalArticle.appendChild(modalBlock);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content", "flex", "flex-col");
  modalContent.innerHTML = `<p class="modal-desc">${project.description}</p>`;
  modalArticle.appendChild(modalContent);

  modal.style.transform = "scale(1)";
  modalContainer.style.animation = "popup 200ms linear forwards";
  document.querySelector("body").classList.add("no-scroll");
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("modal-btns", "flex");

  // Add Links called buttons since they're styled like so
  for (let count = 0; count <= modalData.btnClass.length - 1; count += 1) {
    btnContainer.innerHTML += `<a href="${project.btnLink[count]}" target="_blank" rel="noreferrer" class="${modalData.btnClass[count]}">${modalData.btnText[count]}<img src="${modalData.btnImg[count]}" alt="${modalData.btnAlt[count]}" /></a>`;
  }
  modalContent.appendChild(btnContainer);

  const modalCloseBtn = document.createElement("div");
  modalCloseBtn.addEventListener("click", () => {
    modal.style.transform = "scale(0)";
    modalContainer.remove();
    document.querySelector("body").classList.remove("no-scroll");
  });

  modalCloseBtn.classList.add("close-btn-container");
  modalCloseBtn.innerHTML = `<span class="${modalData.closeBtnData.class[0]}" role="${modalData.closeBtnData.role}"><img class="${modalData.closeBtnData.class[1]}" src="${modalData.closeBtnData.imgSrc}" alt="${modalData.closeBtnData.imgAlt}"/></span>`;
  modalContainer.appendChild(modalCloseBtn);
};
