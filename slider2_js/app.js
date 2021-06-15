const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");

const sidebar = document.querySelector(".sidebar");

const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length;

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlideIndex = 0;

const container = document.querySelector(".container");

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    changeList("down");
  }
  if (e.key === "ArrowUp") {
    changeList("up");
  }
});

const changeList = (direction) => {
  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  } else if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  }
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

downBtn.addEventListener("click", () => {
  changeList("down");
});

upBtn.addEventListener("click", () => {
  changeList("up");
});
