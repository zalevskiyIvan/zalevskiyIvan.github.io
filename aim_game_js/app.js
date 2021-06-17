const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.getElementById("time-list");
const timeEl = document.getElementById("time");
const board = document.getElementById("board");

let score = 0;
let time = 0;

const colors = [
  "rgb(196, 73, 73)",
  "rgb(219, 140, 50)",
  "rgb(50, 219, 182)",
  "rgb(50, 180, 219)",
  "rgb(186, 91, 209)",
];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const setColor = (el) => {
  const index = Math.floor(Math.random() * colors.length);
  el.style.backgroundColor = colors[index];
  el.style.boxShadow = `0 0 2px ${colors[index]}, 0 0 10px ${colors[index]}`;
};

const createCircle = () => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomNumber(15, 40);
  setColor(circle);
  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width);
  const y = getRandomNumber(0, height);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
};

const finishGame = () => {
  board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`;
  timeEl.parentNode.classList.add("hide");
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    if (time < 10) {
      time = `0${time}`;
    }
    --time;

    timeEl.innerHTML = `00:${time}`;
  }
};

const startGame = () => {
  timeEl.innerHTML = `00:${time}`;
  setInterval(decreaseTime, 1000);
  createCircle();
};

board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createCircle();
  }
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = +e.target.getAttribute("data-time");
    screens[1].classList.add("up");
    startGame();
  }
});
