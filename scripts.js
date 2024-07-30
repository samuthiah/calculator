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

// performs the 4 basic arithmetic operations based on the numbers and operator passed
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
    // selects the display of the calculator and declares a variable to store future display text
    const display = document.querySelector('.calcDisplay');
    let displayText;

    // gets all number and operator buttons, then sets an event listener to see if they're clicked
    const calcButtons = document.querySelectorAll('.calcButton');
    calcButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // when a button is clicked, its text is displayed on the display and stored in a variable
            display.textContent += button.textContent;
            displayText = display.textContent;
        })
    })

    // clear button clears dislpay
    const clear = document.querySelector('.calcClearButton');
    clear.addEventListener('click', () => {
        display.textContent = '';
        displayText = '';
    })
})