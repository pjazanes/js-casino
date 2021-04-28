const generateNumberHeading = document.querySelector(".generateNumberHeading"),
    generateNumberForm = document.querySelector(".generateNumberForm")
    generateNumberRange = generateNumberForm.querySelector("input");

function paintNumberRange(){
    const currentValue = generateNumberRange.value;
    generateNumberHeading.innerText = `Guess the Number between 0 and ${currentValue}`;
}

function handleOnInput(event){
    generateNumberHeading.innerText = `Guess the Number between 0 and ${this.value}`;
}

function init(){
    paintNumberRange();
    generateNumberRange.oninput = handleOnInput;
}

init();