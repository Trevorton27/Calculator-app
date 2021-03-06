// var buttonSelected = document.querySelectorAll(".number-buttons");
// var operations = document.querySelectorAll(".operation-buttons");
// const allClear = document.querySelector('.all-clear');
// var displayOutput = document.querySelector(".display-output");

let num1 = null;
let num2 = null;
let operand = null;

var buttonSelected = document.querySelectorAll('.number-buttons');
buttonSelected.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        if (displayOutput.innerHTML === '' || displayOutput.innerHTML === '0') {
            (displayOutput.innerHTML = e.target.innerHTML)
        } else {
            (displayOutput.innerHTML = displayOutput.innerHTML + e.target.innerHTML)
        }
    })
})

var operations = document.querySelectorAll('.operation-buttons');
operations.forEach((button) => {
    button.addEventListener('click', (e) => {
        var displayOutput = document.querySelector('.display-output');
        var operationsValue = e.target.innerHTML;
        operand = operationsValue;
        displayOutput.innerHTML = '';
    })
});

var buttonValue = document.querySelectorAll('.number-buttons');
var displayOutput = document.querySelector('.display-output');
var number = displayOutput.innerHTML;
buttonValue.forEach((button) => {
    button.addEventListener('click', ()=> {
        if(operand === null) {
            num1 = parseFloat(number)
        } else if (num1 !== null && operand !== null) {
            num2 = parseFloat(number);
            // console.log(typeof(num1));
        }
    })
});

function allClear() {
    var displayOutput = document.querySelector('.display-output');
    displayOutput.innerHTML = ''
}

function equals() {
    var operations = document.querySelectorAll('.operation-buttons');
    var displayOutput = document.querySelector(".display-output");
    let total = null;

    switch (operations) {
        case '÷':
            total = num1 / num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '+':
            total = num1 + num2;
        case '-':
            total = num1 - num2;
        default:
            return;
    }
    console.log(num1)
    displayOutput.innerHTML = total
}

function deleteBtn() {}