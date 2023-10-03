const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");

const container = document.querySelector(".container");

const circle = document.querySelector(".circle");

const ul = document.querySelector("ul");

btnOpen.addEventListener("click", function () {
  container.classList.add("nav--show");
  circle.classList.add("circle--rotate-open");
  circle.classList.remove("circle--rotate-close");
  ul.classList.add("ul--show");
});

btnClose.addEventListener("click", function () {
  container.classList.remove("nav--show");
  circle.classList.remove("circle--rotate-open");
  circle.classList.add("circle--rotate-close");
  ul.classList.remove("ul--show");
});
