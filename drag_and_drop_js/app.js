const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

const dragover = (e) => {
  e.preventDefault();
};
const dragenter = (e) => {
  e.target.classList.add("entered");
};
const dragleave = (e) => {
  e.target.classList.remove("entered");
};
const drop = (e) => {
  e.target.append(item);
  e.target.classList.remove("entered");
};

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
});

const dragstart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"));
};
const dragend = (e) => {
  e.target.className = "item";
};
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
