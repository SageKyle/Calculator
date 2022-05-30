// UI VARIABLES
const display = document.querySelector('.display-result');
const controlButtons = document.querySelector('.number-area').children;
const allSymbols = ['+', '-', '/', 'x', '=', '%'];

// FUNCTIONALITY VARIABLES
let firstValue = ''
let secondValue = ''
let result = ''
let symbol = ''

// FUNCTION TO PERFORM THE CALCULATION
const calculate = () => {
    // CONVERT INPUT FROM STRING TO FLOATS
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    // PERFORM CALCULATION BASED ON THE OPERATOR SYMBOL
    if (symbol === '+') result = firstValue + secondValue
    if (symbol === '-') result = firstValue - secondValue
    if (symbol === 'x') result = firstValue * secondValue
    if (symbol === '/') result = firstValue / secondValue
    if (symbol === '%') result = firstValue % secondValue

    display.innerText = result
    firstValue = result
    secondValue = ''
};

// ADD EVENT LISTENER TO EACH OF THE BUTTONS
for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        // CLEAR INPUTS
        if (btnValue === 'C') {
            firstValue = secondValue = symbol = ''
            return display.innerText = ''
        }

        // BACKSPACE FUNCTIONALITY
        if (btnValue === 'DEL') {
            return display.innerText = display.innerText.slice(0, -1)
        }

        // PERFORM CALCULATION IF THERE IS A FIRST NUMBER, AN OPERATOR AND A SECOND NUMBER
        if (firstValue !== '' && btnValueIsSymbol) {
            secondValue && calculate()
            symbol = btnValue
        }

        // IF NO SYMBOL HAS BEEN ENTERED, ADD USER INPUT TO FirstValue 
        // ELSE, ADD USER INPUT TO secondValue
        else if (!symbol) firstValue += btnValue
        else if (symbol) secondValue += btnValue

        // DISPLAY USER INPUT ONLY IF IT'S NOT '='
        if (btnValue !== '=') display.innerText += button.innerText
    });
};