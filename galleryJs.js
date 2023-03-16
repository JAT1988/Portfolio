const menuItems = document.querySelectorAll("nav ul li a");
const menuButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");

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

menuButton.addEventListener("click", openMenu);
