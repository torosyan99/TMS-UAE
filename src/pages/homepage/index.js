import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  const questionsList = document.querySelector(".questions__list");
  const questionsListItems = questionsList.children;
  let activeBox;
  let activeNeighbor;
  let activeIndex = 0;
  let activeButton;
  const height = questionsList.getBoundingClientRect().height;
  console.log(height);

  document.body.addEventListener("click", (e) => {
    const width = window.innerWidth;
    // const questionsListHeight = width > 1290 ? "387px" : "auto";
    const target = e.target;
    const button = target.closest(".questions__button");
    if (button) {
      if (activeBox || button == activeButton) {
        activeBox.style.height = 100 + "%";
        activeNeighbor.className = "questions__box";

        if (activeIndex > 4) {
          let cln = activeBox;
          setTimeout(() => {
            cln.className = "questions__box";
          }, 600);
        } else activeBox.className = "questions__box";

        if (button == activeButton) {
          activeButton = null;
          return;
        }
      }

      const box = button.parentElement;
      const item = box.parentElement;
      const itemIndex = findActiveBoxIndex(item);
      const positionItem = itemIndex <= 4;

      const neighborItem =
        questionsListItems[positionItem ? itemIndex + 5 : itemIndex - 5];
      const neighborBox = neighborItem.querySelector(".questions__box");
      neighborBox.classList.add(
        positionItem ? "bottom-neighbor" : "top-neighbor"
      );

      box.classList.add(positionItem ? "active" : "active-bottom");
      box.style.height = getWidth() ? "387px" : "auto";

      activeNeighbor = neighborBox;
      activeBox = box;
      activeIndex = itemIndex;
      activeButton = button;
    }
  });

  window.addEventListener("resize", () => {
    if (activeBox) {
      activeBox.style.height = getWidth() ? "387px" : "auto";
    }
  });

  function findActiveBoxIndex(item) {
    let index = 0;
    for (const questionItem of questionsListItems) {
      if (item == questionItem) {
        break;
      }

      index++;
    }

    return index;
  }

  const serviceComplex = document.querySelector(".services__complex");
  const servicesWrapper = document.querySelector(".services__complex-wrapper");
  let active;
  let timeOut;

  serviceComplex.addEventListener("click", (e) => {
    const target = e.target;
    const button = target.closest(".services__table-top");
    if (button && button.tagName == "BUTTON") {
      if (active) {
        servicesWrapper.classList.remove("show");
        if (timeOut) return;

        setTimeout(() => {
          active.classList.remove("active");
          if (button == active) {
            servicesWrapper.className = "services__complex-wrapper";
            active = null;
          } else {
            servicesWrapper.className =
              "services__complex-wrapper" + " " + button.dataset.service;
            servicesWrapper.classList.add("show");
            button.classList.add("active");
            active = button;
          }
        }, 400);

        return;
      }

      servicesWrapper.classList.add(button.dataset.service);
      button.classList.add("active");
      active = button;
      setTimeout(() => {
        servicesWrapper.classList.add("show");
      }, 100);
    }
  });
});

function getWidth() {
  return document.documentElement.getBoundingClientRect().width > 1290;
}
