let numFirst = '';
let operator = '';
let numSecond = '';
lastClickedIsEqual = false;

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

function round(x) {
    // Convert to string for easier access to individual digits
    stringNum = String(x);
    decimalIndex = stringNum.indexOf('.');
    // If number is short enough, no rounding necessary
    if (stringNum.length <= 10) {
        return x;
    }
    // indexOf used about returns -1 if no decimal in number
    else if (decimalIndex === -1) {
        return x.toExponential(5);
    }
    // still want to return exponential location if floating point number is too large
    else if (decimalIndex > 9) {
        return x.toExponential(5);
    }
    //
    else {
        if (stringNum[11] < 5) {
            return (stringNum.slice(0,11));
        }
        else if (stringNum[10] === 9) {
            stringNum[9]++;
            stringNum[10] = 0;
            return (stringNum.slice(0,11));
        }
        else {
            stringNum[10]++;
            return (stringNum.slice(0,11));
        }
    }
}

// performs the 4 basic arithmetic operations based on the numbers and operator passed
function operate(x, y, operator) {
    if (operator === '*') {
        return round(multiply(x, y));
    } 
    if (operator === '+') {
        return round(add(x, y));
    } 
    if (operator === '-') {
        return round(subtract(x, y));
    } 
    if (operator === '/') {
        return round(divide(x, y));
    } 
}


document.addEventListener('DOMContentLoaded', () => {
    // selects the display of the calculator and declares a variable to store future display text
    const display = document.querySelector('.calcDisplayText');
    let displayText;

    // gets all number and operator buttons
    const calcNumberButtons = document.querySelectorAll('.calcNumberButton');
    const calcOperatorButtons = document.querySelectorAll('.calcOperatorButton');

    // when a number button is clicked, check if it's before or after the operator then adds the number to appropriate variable and updates display
    calcNumberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operator === '') {
                if (numFirst.length < 10) {
                    numFirst += button.textContent;
                    display.textContent = numFirst;
                }
            }
            else {
                if (numSecond.length < 10) {
                    numSecond += button.textContent;
                    display.textContent = numSecond;
                }
            }
        })
    })

    // when an operator button is clicked, check if a first number has been entered and if so, assigns the given operator
    calcOperatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (numFirst === '') {
                alert('Enter a number first');
            }
            else if (numSecond ==='') {
                operator = button.textContent;
                lastClickedIsEqual = false;
            }
            else {
                if (operator === '/' && numSecond == 0) {
                    alert ("You can't divide by zero!")
                    numSecond = '';
                }
                else {
                    display.textContent = operate(numFirst, numSecond, operator);
                    numFirst = display.textContent;
                }
                operator = button.textContent;
                numSecond = '';
                lastClickedIsEqual = false;
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

    // implements a backspace button
    const backspaceButton = document.querySelector('.calcBackspaceButton');
    backspaceButton.addEventListener('click', () => {
        if (operator === '') {
            numFirst = numFirst.slice(0,-1);
            display.textContent = numFirst;
        }
        else if (numSecond !== '') {
            numSecond = numSecond.slice(0,-1);  
            display.textContent = numSecond;
        }
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
                numSecond = '';
        }
        else {
            display.textContent = operate(numFirst, numSecond, operator);
            numFirst = display.textContent;
            numSecond = '';
            lastClickedIsEqual = true;
        }
    })

    // allows floating point numbers to be entered
    const period = document.querySelector('.calcFloatingPointButton');
    period.addEventListener('click', () => {
        // separates cases between first and second number
        if (operator === '') {
            // indexOf will return -1 if a period is not in the string thus far, prevents multiple periods
            if (numFirst.indexOf('.') === -1)
            {
                numFirst += period.textContent;
                display.textContent = numFirst;
            }
        }
        else {
            // indexOf will return -1 if a period is not in the string thus far, prevents multiple periods
            if (numSecond.indexOf('.') === -1) {
                numSecond += period.textContent;
                display.textContent = numSecond;
            }
        }
    })
})