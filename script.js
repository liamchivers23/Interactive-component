const ratings = document.querySelectorAll(".list-item");
const submit = document.querySelector(".submit-btn");
const rating = document.querySelector(".rating");
const container = document.querySelector(".container");
const thankYouState = document.querySelector(".thankyou-state");

ratings.forEach((e) => {
  e.addEventListener("click", () => {
    e.style.backgroundColor = "var(--orange)";
    rating.textContent = `${e.textContent}`;
  });
});

submit.addEventListener("click", () => {
  container.classList.toggle("hide");
  thankYouState.classList.toggle("hide");
});
