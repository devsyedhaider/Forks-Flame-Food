const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


