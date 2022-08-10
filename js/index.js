const driver = "Vitor";
const navigator = "Vitor Hugo";

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, ${driver} has ${driver.length} characters.`
  );
} else if (navigator.length > driver.length) {
  console.log(
    `It seems that the navigator has the longest name, ${navigator} has ${navigator.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driver} and ${navigator} has ${driver.length} characters!`
  );
}

const driverName = driver
  .toUpperCase()
  .split("")
  .join(" ")
  .replace(/\s+/g, " ");

const navigatorName = navigator.split("").reverse().join("");

console.log(`Driver's name: ${driverName}`);
console.log(`Navigator's name: ${navigatorName}`);
