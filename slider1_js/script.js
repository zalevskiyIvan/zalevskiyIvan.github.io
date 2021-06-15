const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearActionClass();
    slide.classList.add("active");
  });
});

const clearActionClass = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};
