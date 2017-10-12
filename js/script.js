var menuToggle = document.querySelector(".main-navigation__button");
var mainNavigation = document.querySelector(".main-navigation");
var html = document.documentElement;

html.className = mainNavigation.classList.remove("main-navigation--open");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  mainNavigation.classList.toggle("main-navigation--open");
});
