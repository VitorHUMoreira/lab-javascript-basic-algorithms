const content = document.querySelector(".content");
const form = document.querySelector(".form");
const lorem = document.querySelector("#lorem");
const words = document.querySelector(".countWords");
const ets = document.querySelector(".countEts");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  content.style.display = "block";

  const countWords = lorem.value.split(" ");

  words.innerHTML = `The <strong>number of words</strong> in this Lorem Ipsum is <strong>${
    countWords.filter((word) => word !== "").length
  }</strong>`;
  ets.innerHTML = `The <strong>number of et's</strong> in this Lorem Ipsum is <strong>${
    lorem.value.split(" et ").length - 1
  }</strong>`;

  lorem.value = "";
  lorem.focus();
});
