const board = document.getElementById("board");
const SQUARES_NUMBER = 500;

const colors = [
  "rgb(196, 73, 73)",
  "rgb(219, 140, 50)",
  "rgb(50, 219, 182)",
  "rgb(50, 180, 219)",
  "rgb(186, 91, 209)",
];

const setColor = (el) => {
  const index = Math.floor(Math.random() * colors.length);
  el.style.backgroundColor = colors[index];
  el.style.boxShadow = `0 0 2px ${colors[index]}, 0 0 10px ${colors[index]}`;
};
const removeColor = (el) => {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px black`;
};
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}
