const backButton = document.querySelector("#backtotop");
const header = document.querySelector(".main_nav");
const menuButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backButton.style.display = "block";
    header.classList.add("bg");
  } else {
    backButton.style.display = "none";
    header.classList.remove("bg");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const openMenu = () => {
  for (const link of menuItems) {
    link.addEventListener("click", openMenu);
  }

  if (nav.classList.contains("mobileresponse")) {
    nav.classList.remove("mobileresponse");
  } else {
    nav.classList.add("mobileresponse");
  }
};

backButton.addEventListener("click", getToTop);

menuButton.addEventListener("click", openMenu);
