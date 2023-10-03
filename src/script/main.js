//Pre Loader
window.addEventListener('loader', ()=>{
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('active');
})

//Smooth Scroll Navigation
const navigation = document.querySelector(".navbar");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

//Start of Light & Dark Mode Section//

const lightDark = document.querySelector(".light-dark");
let theme = document.querySelector(".light-dark > .theme");
let storage = localStorage.getItem("themes");
const trial = document.querySelector(".trial");

function setLight() {
  document.body.classList.add("active");
  theme.classList.remove("fa-moon");
  theme.classList.add("fa-sun");
  trial.classList.add("active");
  document.querySelector(".light-dark > .theme").style.color = "#FDB813";
}
function setDark() {
  theme.classList.remove("fa-sun");
  theme.classList.add("fa-moon");
  document.body.classList.remove("active");
  trial.classList.remove("active");
  document.querySelector(".light-dark > .theme").style.color = "#B8AEA3";
}

if (storage === "light") {
  setLight();
} else {
  setDark();
}

lightDark.addEventListener("click", (e) => {
  if (theme.classList.contains("fa-moon")) {
    setLight();
    localStorage.setItem("themes", "light");
  } else {
    setDark();
    localStorage.setItem("themes", "dark");
  }
  
});
//End of Light & Dark Mode Section//

//Scroll Active Navigation Bar
let navLinkS = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = " ";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });
  navLinkS.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});





//Skeleton
//Horizontal Scroll for Skills
//Pre-Loader

//Target Javascript Functions
//1. Scroll Active Navigation Bar - Done
//2. Skeleton
//3. Horizonal Scroll
//4. Pre-Loader
//5. Light & Dark Mode - Done
//6. Smooth Scrolling - Done


//Reference
// https://codepen.io/dbilanoski/pen/LabpzG - Active Navigation
// https://codepen.io/kevinpowell/pen/eYjRVmw - Smooth Scrolling