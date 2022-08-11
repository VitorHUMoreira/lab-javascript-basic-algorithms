const inputDriverName = document.querySelector("#driver");
const inputNavigatorName = document.querySelector("#navigator");
const form = document.querySelector(".form");
const driverName = document.querySelector(".driverName");
const navigatorName = document.querySelector(".navigatorName");
const largerName = document.querySelector(".largerName");
const newDriverName = document.querySelector(".newDriverName");
const newNavigatorName = document.querySelector(".newNavigatorName");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  driverName.innerHTML = `The driver's name is <strong>${inputDriverName.value}</strong>`;
  navigatorName.innerHTML = `The navigator's name is <strong>${inputNavigatorName.value}</strong>`;

  if (inputDriverName.value.length > inputNavigatorName.value.length) {
    largerName.innerHTML = `The <strong>driver</strong> has the <strong>longest name</strong>, <strong>${inputDriverName.value}</strong> has <strong>${inputDriverName.value.length} characters</strong>.`;
  } else if (inputNavigatorName.value.length > inputDriverName.value.length) {
    largerName.innerHTML = `It seems that the <strong>navigator</strong> has the <strong>longest name</strong>, <strong>${inputNavigatorName.value}</strong> has <strong>${inputNavigatorName.value.length} characters</strong>.`;
  } else {
    largerName.innerHTML = `Wow, you both have <strong>equally long names</strong>, <strong>${inputDriverName.value}</strong> and <strong>${inputNavigatorName.value}</strong> has <strong>${inputDriverName.value.length} characters</strong>!`;
  }
  newDriverName.innerHTML = `New driver's name: <strong>${inputDriverName.value
    .toUpperCase()
    .split("")
    .join(" ")
    .replace(/\s+/g, " ")}</strong>`;
  newNavigatorName.innerHTML = `New navigator's name: <strong>${inputNavigatorName.value
    .split("")
    .reverse()
    .join("")}</strong>`;

  inputDriverName.value = "";
  inputNavigatorName.value = "";
  inputDriverName.focus();
});
