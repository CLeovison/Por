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

if (storage === "light") {
  setLight();
} else {
  setDark();
}

lightDark.addEventListener("click", () => {
  if (theme.classList.contains("fa-moon")) {
    setLight();
    localStorage.setItem("themes", "light");
  } else {
    setDark();
    localStorage.setItem("themes", "dark");
  }
});

//Active Navigation Bar

//Skeleton

//Horizontal Scroll for Skills

//Pre-Loader




//Target Javascript Functions
//1. Active Navigation Bar
//2. Skeleton
//3. Horizonal Scroll
//4. Pre-Loader