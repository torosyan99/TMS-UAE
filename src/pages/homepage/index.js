import "./index.scss";

const questionsList = document.querySelector(".questions__list");
const questionsListItems = questionsList.children;
let activeBox;
let activeNeighbor;
let activeIndex = 0;


questionsList.addEventListener("click", (e) => {
  const questionsListHeight = '387';
  const target = e.target;
  const button = target.closest(".questions__button");
  if (button) {
    if (activeBox) {
      activeBox.style.height = 100 + "%";
      activeNeighbor.className = "questions__box";

      if (activeIndex > 4) {
        let cln = activeBox;
        setTimeout(() => {
          cln.className = "questions__box";
        }, 400);
      } else activeBox.className = "questions__box";
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
    box.style.height = questionsListHeight + "px";

    activeNeighbor = neighborBox;
    activeBox = box;
    activeIndex = itemIndex;
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
