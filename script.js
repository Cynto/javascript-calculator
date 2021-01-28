//buttons
const buttonZero = document.querySelector('#zero');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');

const buttonEquals = document.querySelector('#equals');
const buttonAdd = document.querySelector('#add');
const buttonMultiply = document.querySelector('#multiply');
const buttonDelete = document.querySelector('#delete');
const buttonClear = document.querySelector('#clear');
const buttonDivide = document.querySelector('#divide');
const buttonPower = document.querySelector('#power');





const numberText = document.querySelector('#number-text');

let num = 0;
// added click event listner to buttons, which goes to numberClick function which adds numbers to h1 element.
buttonZero.addEventListener('click',() => {num = 0; numberClick(num);});
buttonOne.addEventListener('click',() => {num = 1;numberClick(num);});
buttonTwo.addEventListener('click',() => {num = 2;numberClick(num);});
buttonThree.addEventListener('click',() => {num = 3;numberClick(num);});
buttonFour.addEventListener('click',() => {num = 4;numberClick(num);});
buttonFive.addEventListener('click',() => {num = 5;numberClick(num);});
buttonSix.addEventListener('click',() => {num = 6;numberClick(num);});
buttonSeven.addEventListener('click',() => {num = 7;numberClick(num);});
buttonEight.addEventListener('click',() => {num = 8;numberClick(num);});
buttonNine.addEventListener('click',() => {num = 9;numberClick(num);});

function numberClick(num) {
    
    numberText.textContent += num;
}


function add(num1, num2, ...num3) {
    
    let total = 0;
    let totalArray = 0;
    
    total += num1 + num2;
    // If the function has more than two arguments it'll loop through and add the values to the totalArray which will be added to the total amount.
    if(arguments.length > 2) {
    for(i = 0; i < num3.length; i++) {
        totalArray += num3[i]
        
    }
    total += totalArray;
}
    return total;
}
function subtract(num1, num2, ...num3) {
    let total = num1;
    total -= num2;
    if(arguments.length > 2) {
        for(i = 0; i < num3.length; i++) {
            total -= num3[i]
            
        }
    }
   
    return total
}

function multiply(num1, num2, ...num3) {
    let total = num1 * num2;
    if(arguments.length > 2) {
        for(i = 0; i < num3.length; i++) {
            total *= num3[i]
           
        }
    }
    return total;
}

function divide(num1, num2, ...num3) {
    let total = num1 / num2;
    if(arguments.length > 2) {
        for(i = 0; i < num3.length; i++) {
            total /= num3[i]
           
        }
    }
    return total;
}
function remainder(num1, num2) {
    return num1 % num2;
}
function exponent(num1, num2) {
    return num1 ** num2;
}

function operate(operator, num1, num2) {
    return(operator(num1, num2));
    
}
