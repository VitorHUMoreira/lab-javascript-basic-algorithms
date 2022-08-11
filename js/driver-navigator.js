const content = document.querySelector(".content");
const inputDriverName = document.querySelector("#driver");
const inputNavigatorName = document.querySelector("#navigator");
const form = document.querySelector(".form");
const driverName = document.querySelector(".driverName");
const navigatorName = document.querySelector(".navigatorName");
const longerName = document.querySelector(".longerName");
const newDriverName = document.querySelector(".newDriverName");
const newNavigatorName = document.querySelector(".newNavigatorName");
const lexicographicName = document.querySelector(".lexicographicName");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  content.style.display = "block";

  driverName.innerHTML = `The driver's name is <strong>${inputDriverName.value}</strong>`;
  navigatorName.innerHTML = `The navigator's name is <strong>${inputNavigatorName.value}</strong>`;

  if (inputDriverName.value.length > inputNavigatorName.value.length) {
    longerName.innerHTML = `<strong>${inputDriverName.value}</strong> has the <strong>longest name</strong>, it has <strong>${inputDriverName.value.length} characters</strong>.`;
  } else if (inputDriverName.value.length < inputNavigatorName.value.length) {
    longerName.innerHTML = `It seems that <strong>${inputNavigatorName.value}</strong> has the <strong>longest name</strong>, it has <strong>${inputNavigatorName.value.length} characters</strong>.`;
  } else {
    longerName.innerHTML = `Wow, you both have <strong>equally long names</strong>, <strong>${inputDriverName.value}</strong> and <strong>${inputNavigatorName.value}</strong> has <strong>${inputDriverName.value.length} characters</strong>!`;
  }

  newDriverName.innerHTML = `New driver's name is <strong>${inputDriverName.value
    .toUpperCase()
    .split("")
    .join(" ")
    .replace(/\s+/g, " ")}</strong>.`;
  newNavigatorName.innerHTML = `New navigator's name is <strong>${inputNavigatorName.value
    .split("")
    .reverse()
    .join("")}</strong>.`;

  if (inputDriverName.value < inputNavigatorName.value) {
    lexicographicName.innerHTML = `<strong>${inputDriverName.value}</strong> goes first.`;
  } else if (inputDriverName.value > inputNavigatorName.value) {
    lexicographicName.innerHTML = `Yo, <strong>${inputNavigatorName.value}</strong> goes first definitely.`;
  } else {
    lexicographicName.innerHTML = `What?! You both have the same name?`;
  }

  inputDriverName.value = "";
  inputNavigatorName.value = "";
  inputDriverName.focus();
});
