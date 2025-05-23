import "./js/icons.js";

const header = document.querySelector(".header");
const headerButton = document.querySelector(".header__menu-button");

let open = false;
document.body.addEventListener("click", (e) => {
  const target = e.target;
  const width = window.innerWidth;
  if (target.closest(".header__menu-button")) {
    header.classList.toggle("menu-open");
    open = !open;
    if (width <= 740) {
      document.body.classList.toggle("body-overflow");
    }
    return;
  } else if (open && !target.closest(".header")) {
    header.classList.remove("menu-open");
    if (width <= 740) {
      document.body.classList.remove("body-overflow");
    }
    open = false;
  }
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;

  if (width > 740 && document.body.classList.contains("body-overflow")) {
    document.body.classList.remove("body-overflow");
  } else if (width <= 740 && header.classList.contains("menu-open")) {
    document.body.classList.add("body-overflow");
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 50) {
    header.classList.add("scrolled"); 
  } else {
    header.classList.remove("scrolled"); 
  }
});
