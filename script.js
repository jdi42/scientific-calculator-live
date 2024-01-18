document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here
    console.log('Document is ready!');
});
const display = document.getElementById('calc-display');
const buttons = document.getElementsByClassName('btn');
// console.log(display);
// console.log(buttons);

let currentValue = "";

function evaluateResult() {
    console.log("currentValue:", currentValue);

    const convertedValue=currentValue.  // THIS ONLY REPLACES THE FIRST INSTANCE OF THE SYMBOL
    .replace("×","*")
    .replace("÷","/")
    .replace("%","*0.01");

    console.log("convertedValue",convertedValue);
    const result = eval(convertedValue);
    currentValue=result.toString();
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        const value = button.innerText;

        if (value == "AC") {
            currentValue = "";
        } else if (value == "=") {
            evaluateResult();
        }
        else {
            currentValue += value;
        }
        display.value = currentValue;

    })

}
