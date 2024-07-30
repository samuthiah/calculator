function add(x, y) {
    return (+x + +y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

let numFirst;
let operator;
let numSecond;

function operate(x, y, operator) {
    if (operator === '*') {
        return multiply(x, y);
    } 
    if (operator === '+') {
        return add(x, y);
    } 
    if (operator === '-') {
        return subtract(x, y);
    } 
    if (operator === '/') {
        return divide(x, y);
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calcDisplay');
    let displayText;
    const calcButtons = document.querySelectorAll('.calcButton');
    calcButtons.forEach((button) => {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            displayText = display.textContent;
            console.log(displayText);
        })
    })
})