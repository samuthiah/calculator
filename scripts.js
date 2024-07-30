let numFirst = '';
let operator = '';
let numSecond = '';

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

    // gets all number and operator buttons
    const calcNumberButtons = document.querySelectorAll('.calcNumberButton');
    const calcOperatorButtons = document.querySelectorAll('.calcOperatorButton');

    // when a number button is clicked, check if it's before or after the operator then adds the number to appropriate variable and updates display
    calcNumberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator === '') {
                numFirst += button.textContent;
                display.textContent = numFirst;
            }
            else {
                numSecond += button.textContent;
                display.textContent = numSecond;
            }
        })
    })

    // when an operator button is clicked, check if there's already an operator and if not, add operator to display and assigns it to the operator variable
    calcOperatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (numFirst === '') {
                alert('Enter a number first');
            }
            else if (operator === '') {
                operator = button.textContent;
            }
            else {
                alert('Operator already selected');
            }
        })
    })

    // clear button clears dislpay
    const clearButton = document.querySelector('.calcClearButton');
    clearButton.addEventListener('click', () => {
        display.textContent = '';
        numFirst = '';
        operator = '';
        numSecond = '';
    })

    // equal button evaluates expression if both numbers and an operator have been given
    const equalButton = document.querySelector('.calcEqualButton');
    equalButton.addEventListener('click', () => {
        // if there is no first number, the operator will also be blank, nothing to evaluate
        if (operator === '') {}
        else if (numSecond === '') {
            alert('Enter a second number');
        }
        else if (operator === '/' && numSecond == 0) {
                alert ("You can't divide by zero!")
        }
        else {
            display.textContent = operate(numFirst, numSecond, operator);
        }
    })

  
})