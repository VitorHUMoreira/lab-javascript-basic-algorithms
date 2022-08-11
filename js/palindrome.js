const content = document.querySelector(".content");
const form = document.querySelector(".form");
const phrase = document.querySelector("#phrase");
const isPalindrome = document.querySelector(".isPalindrome");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  content.style.display = "block";

  isPalindrome.innerHTML = `The phrase "<strong>${phrase.value}</strong>" is a <strong>Palindrome</strong>.`;

  phrase.value = "";
  phrase.focus();
});
