//Smooth Scroll Navigation
const navigation = document.querySelector(".navbar");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

//Light & Dark Mode Section

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

storage === "light" ? setLight() : setDark();

lightDark.addEventListener("click", (e) => {
  if (theme.classList.contains("fa-moon")) {
    setLight();
    localStorage.setItem("themes", "light");
  } else {
    setDark();
    localStorage.setItem("themes", "dark");
  }
});

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

//Intersection Observer

function createObserver() {
  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
  };

  let observer = new IntersectionObserver(callback, options);

  let target = document.querySelector("#listItem");
  observer.observe(target);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };
}
createObserver();

//Documentation//

//1. Light Dark Mode Section

// The ClassList contains will be executed if the value that has been declared was there,
// Meaning if the value is true then it will be executed, if false then it will not be executed

//Target Javascript Functions
//1. Scroll Active Navigation Bar - Done
//2. Skeleton
//3. Pre-Loader
//4. Light & Dark Mode - Done
//5. Smooth Scrolling - Done
//6. Scroll Timeline Animation

//Reference
// https://codepen.io/dbilanoski/pen/LabpzG - Active Navigation
// https://codepen.io/kevinpowell/pen/eYjRVmw - Smooth Scrolling
