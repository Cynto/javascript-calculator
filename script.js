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
const buttonSubtract = document.querySelector('#subtract');




const numberText = document.querySelector('#number-text');
numberText.textContent = 0;
const sumText = document.querySelector('#sum');

let num = 0;
let total = '';
let calc = '';
let inputArray = [];
let grandTotal = 0;


let operator = '';
let round = 0;


// added click event listner to buttons, which goes to numberClick function which adds numbers to h1 element.
buttonZero.addEventListener('click',() => {num = 0; total += 0; calc += 0;numberClick(num);});
buttonOne.addEventListener('click',() => {num = 1; total += 1;calc += 1;numberClick(num);});
buttonTwo.addEventListener('click',() => {num = 2;total += 2;calc += 2;numberClick(num);});
buttonThree.addEventListener('click',() => {num = 3;total += 3;calc += 3;numberClick(num);});
buttonFour.addEventListener('click',() => {num = 4;total += 4;calc += 4;numberClick(num);});
buttonFive.addEventListener('click',() => {num = 5;total += 5;calc += 5;numberClick(num);});
buttonSix.addEventListener('click',() => {num = 6;total += 6;calc += 6;numberClick(num);});
buttonSeven.addEventListener('click',() => {num = 7;total += 7;calc += 7;numberClick(num);});
buttonEight.addEventListener('click',() => {num = 8;total += 8;calc += 8;numberClick(num);});
buttonNine.addEventListener('click',() => {num = 9;total += 9;calc += 9;numberClick(num);});

buttonDelete.addEventListener('click',() => {
    numberText.textContent = numberText.textContent.slice(0, -1)
    total = Math.floor(total / 10);
    if (numberText.textContent.length === 0) {
        clear();
    }
    

})
buttonClear.addEventListener('click', clear);
buttonSubtract.addEventListener('click', () => {
    splitArray('-');
    if(numberText.textContent.charAt(numberText.textContent.length - 1) != '-' && numberText.textContent.length > 0) {
        numberClick('-'); }
})
buttonAdd.addEventListener('click',() => {
    startNew('add');
    if(numberText.textContent.charAt(numberText.textContent.length - 1) != '+' && numberText.textContent.length > 0) {
        numberClick('+');
}})

function startNew(operator) {
    inputArray.push(Number(total));
    
    total = ''
    round += 1;
    
    switch(operator) {
        case 'add':
            console.log(round)
            
            if(inputArray.length == 2) {
                grandTotal= operate(add, inputArray[0], inputArray[1])
                
                inputArray = [];
                inputArray.push(grandTotal);
            }
            console.log(inputArray)
            break;
}
}


buttonEquals.addEventListener('click',() => {
    sumText.textContent = numberText.textContent;
  
    
   
})

function numberClick(value) {
    
    if(numberText.textContent.charAt(0) === '0') {
        numberText.textContent = '';
    };
    if(round >= 2) {
        if(value === '1' || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9 || value === 0 ) {
            numberText.textContent = total;
        }
        else {
            numberText.textContent = grandTotal
        }
    }
    else {
        numberText.textContent = total;
    }
   
    
    
    
}
function clear() {
    round = 0;
    total = '';
    realNum = 0;
    realNum2 = 0;
    grandTotal = 0;
    inputArray = [];
    sumText.textContent = '';
    numberText.textContent = 0;
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
