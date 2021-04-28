const generateNumberHeading = document.querySelector(".generateNumberHeading"),
  generateNumberRange = document.querySelector(".generateNumberRange"),
  guessNumberInput = document.querySelector(".guessNumberInput"),
  playBtn = document.querySelector("button"),
  resultContainer = document.querySelector(".resultContainer"),
  numberResult = resultContainer.querySelector(".numberResult"),
  gameResult = resultContainer.querySelector(".gameResult"),
  inputError = document.querySelector(".inputError");

let rangeValue = generateNumberRange.value;

function handleClick() {
  if (guessNumberInput.value !== "") {
    inputError.classList.remove("showing");
    resultContainer.classList.add("showing");
    const inputValue = guessNumberInput.value;
    const randomValue = Math.floor(Math.random() * rangeValue + 1);
    numberResult.innerText = `You chose ${inputValue}, the machine chose ${randomValue}`;
    gameResult.innerText =
      Number(inputValue) === randomValue ? "You win!" : "You lose!";
  } else {
      inputError.classList.add("showing");
  }
}

function paintNumberRange() {
  generateNumberHeading.innerText = `Guess the Number between 0 and ${rangeValue}`;
  guessNumberInput.max = rangeValue;
}

function handleOnInput() {
  rangeValue = this.value;
  paintNumberRange();
}

function init() {
  paintNumberRange();
  generateNumberRange.oninput = handleOnInput;
  playBtn.addEventListener("click", handleClick);
}

init();
