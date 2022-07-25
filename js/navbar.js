// When the user scrolls the page, execute myFunction
window.onscroll = function() {switchNavbar()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function switchNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-sticky")
  } else {
    navbar.classList.remove("navbar-sticky");
  }
} 