import "./styles.css";

const spanElement = document.getElementById("counter");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.getElementById("decrement");

let counter = 0;

incrementBtn.addEventListener("click", (e) => {
  spanElement.textContent = ++counter;
});

decrementBtn.addEventListener("click", (e) => {
  spanElement.textContent = --counter;
});
