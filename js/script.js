var menuToggle = document.querySelector(".main-navigation__button");
var mainNavigation = document.querySelector(".main-navigation");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  mainNavigation.classList.toggle("main-navigation--open");
});
