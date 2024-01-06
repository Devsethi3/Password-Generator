document.addEventListener("DOMContentLoaded", function () {
  var labels = document.querySelectorAll(".form-control label");

  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      var checkbox = this.nextElementSibling;
      checkbox.checked = !checkbox.checked;
    });
  });
});

let passwordLength = 8;
let isUpperCase = false;
let isNumber = false;
let isSymbol = false;

const passwordRangeInputElement = document.getElementById("password-range-input");
const passwordRangeValue = document.getElementById("password-range-value");
const generateBtn = document.getElementById("generate-btn");
const passwordDiv = document.getElementById("password");
const copyIcon = document.getElementById("copy-icon");

const generatePassword = (passLength) => {

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = isNumber ? "0123456789" : "";
  const symbols = isSymbol ? "!@#$%^&*()_+" : "";

  const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
  let password = "";

  for (let i = 0; i < passLength; i++) {
    const charIndex = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[charIndex];
  }

  return password;
};

passwordRangeInputElement.addEventListener("input", (e) => {
  passwordLength = +e.target.value;
  passwordRangeValue.innerText = passwordLength;
});

generateBtn.addEventListener("click", () => {
  const upperCaseCheck = document.getElementById("uppercase");
  const symbolsCheck = document.getElementById("symbols");
  const numbersCheck = document.getElementById("numbers");

  isUpperCase = upperCaseCheck.checked;
  isNumber = numbersCheck.checked;
  isSymbol = symbolsCheck.checked;

  const password = generatePassword(passwordLength);
  passwordDiv.innerHTML = password;
});

copyIcon.addEventListener("click", (e) => {
  navigator.clipboard.writeText(passwordDiv.innerText);

  const copyMessage = document.querySelector(".copy-message");
  copyMessage.classList.add("show-message");

  setTimeout(() => {
    copyMessage.classList.remove("show-message");
  }, 1000);
});