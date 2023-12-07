//Start of Smooth Scroll Navigation
function smoothScroll() {
  const navigation = document.querySelector(".navbar");
  const navigationHeight = navigation.offsetHeight;

  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
  );
}
smoothScroll();
//End of Smooth Scroll Navigation

//Start of Light & Dark Mode Section
function lightDark() {
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
}
lightDark();
//End of Light & Dark Mode Section

//Start of Scroll Active Navigation Bar

function scrollActive() {
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
}
scrollActive();
//End of Scroll Active Navigation Bar

//Tabs
function tabs() {
  const companys = document.querySelectorAll(".company-name");
  const description = document.querySelectorAll(".descrip");

  companys.forEach((company) => {
    company.addEventListener("click", () => {

      const index  = [...companys].indexOf(company);
      companys.forEach((x) => {
        x.classList.remove("active");
      });

      company.classList.add("active");

      description.forEach((descrip) => {
        descrip.classList.remove("active");
      });
      description[index].classList.add('active')

    });
  });
}
tabs();
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
//6. Intersection Observer
//7. View Transition Timeline

//Reference
// https://codepen.io/dbilanoski/pen/LabpzG - Active Navigation
// https://codepen.io/kevinpowell/pen/eYjRVmw - Smooth Scrolling
