const content = document.querySelector(".content");
const form = document.querySelector(".form");
const phrase = document.querySelector("#phrase");
const isPalindrome = document.querySelector(".isPalindrome");

function checkPalindrome(phrase) {
  phrase = phrase.toLowerCase().replace(/[^a-z]+/g, "");
  return phrase === phrase.split("").reverse().join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  content.style.display = "block";

  if (checkPalindrome(phrase.value)) {
    isPalindrome.innerHTML = `The phrase "<strong>${phrase.value}</strong>" is a <strong>Palindrome</strong>.`;
  } else {
    isPalindrome.innerHTML = `The phrase "<strong>${phrase.value}</strong>" is <span>NOT</span> a <strong>Palindrome</strong>.`;
  }

  phrase.value = "";
  phrase.focus();
});
