const body = document.body;
const ul = document.querySelector(".navbar-nav");
const navToggler = document.querySelector(".navbar-toggler");
const navItem = document.querySelectorAll(".nav-item");
const themeToggler = document.querySelector(".theme-toggler");
const themeTogglerIcon = document.querySelector(".theme-toggler-icon");

// set theme modes
if (!localStorage.getItem("portfolio-theme")) {
  body.classList.add("light");
  localStorage.setItem("portfolio-theme", "light");
} else {
  body.classList.add(localStorage.getItem("portfolio-theme"));
}

const isDark = () => localStorage.getItem("portfolio-theme") === "dark";

navToggler.addEventListener("click", () => {
  ul.classList.toggle("show-nav");
});

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    ul.classList.toggle("show-nav");
  });
});

themeToggler.addEventListener("click", () => {
  isDark() ? toggleTheme("light") : toggleTheme("dark");
});

const toggleTheme = (themeMode) => {
  if (themeMode === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    themeTogglerIcon.classList.remove("fa-sun");
    themeTogglerIcon.classList.add("fa-moon");
    localStorage.setItem("portfolio-theme", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeTogglerIcon.classList.remove("fa-moon");
    themeTogglerIcon.classList.add("fa-sun");
    localStorage.setItem("portfolio-theme", "dark");
  }
};
