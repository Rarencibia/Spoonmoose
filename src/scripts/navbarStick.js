window.onscroll = () => {
    myFunction();
};

var navbar = document.getElementById("mainNav");
var sticky = mainNav.offsetTop;

function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    mainNav.classList.add("sticky")
  } else {
    mainNav.classList.remove("sticky");
  }
};