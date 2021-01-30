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
let totalArray = [];
let grandTotal = 0;


let operator = '';
let round = 0;


// added click event listner to buttons, which goes to numberClick function which adds numbers to h1 element.
buttonZero.addEventListener('click',() => {num = 0; total += 0;numberClick(num);});
buttonOne.addEventListener('click',() => {num = 1; total += 1;numberClick(num);});
buttonTwo.addEventListener('click',() => {num = 2;total += 2;numberClick(num);});
buttonThree.addEventListener('click',() => {num = 3;total += 3;numberClick(num);});
buttonFour.addEventListener('click',() => {num = 4;total += 4;numberClick(num);});
buttonFive.addEventListener('click',() => {num = 5;total += 5;numberClick(num);});
buttonSix.addEventListener('click',() => {num = 6;total += 6;numberClick(num);});
buttonSeven.addEventListener('click',() => {num = 7;total += 7;numberClick(num);});
buttonEight.addEventListener('click',() => {num = 8;total += 8;numberClick(num);});
buttonNine.addEventListener('click',() => {num = 9;total += 9;numberClick(num);});

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
    splitArray('+');
    if(numberText.textContent.charAt(numberText.textContent.length - 1) != '+' && numberText.textContent.length > 0) {
        numberClick('+');
}})


function splitArray(symbol) {
    switch(symbol) {
        case '+':
            total += '+'
            operator = 'add'
            totalArray = total.split('+');
            
            round += 1;
            for(i = 0; i < totalArray.length; i++) {
            
                if(totalArray[-i] === undefined) {
                    totalArray.splice(-i, 1);
                }
            }
            console.log(totalArray.length)
            if(totalArray.length === 2) {
                grandTotal += operate(add, Number(totalArray[0]), Number(totalArray[1]));
                totalArray = [];
                total = '';
                
            } 
            break;
        case '-':
            total += '-'
            operator = 'subtract'
            totalArray = total.split('-');
            
            round += 1;
            for(i = 0; i < totalArray.length; i++) {
            
                if(totalArray[-i] === undefined) {
                    totalArray.splice(-i, 1);
                }
            }

            console.log(totalArray)
            if(totalArray.length === 2) {
                grandTotal -= operate(subtract, Number(totalArray[0]), Number(totalArray[1]));
                console.log(grandTotal)
                totalArray = [];
                total = '';
                let anotherArray = [grandTotal]
                console.log(anotherArray)
                
            } 
            }
            
}

buttonEquals.addEventListener('click',() => {
    sumText.textContent = numberText.textContent;
  
    
    switch(operator) {
        case 'add':
            totalArray = total.split('+');
            if(totalArray.length === 2) {
                grandTotal += operate(add, Number(totalArray[0]), Number(totalArray[1]));
                totalArray = [];
                total = '';
                
            } 
        
            if(totalArray.length === 1) {
                console.log(totalArray)
                let num1 = Number(totalArray[0]);
                console.log(num1);
                grandTotal = operate(add, grandTotal, num1);
                
                numberText.textContent = grandTotal
            }
            else {
                numberText.textContent = grandTotal
            }
            break;
        case 'subtract': 

        totalArray = total.split('-');
        
            if(totalArray.length === 2) {
                grandTotal = operate(subtract, Number(totalArray[0]), Number(totalArray[1]));
                totalArray = [];
                total = '';
                
            } 
        
            if(totalArray.length === 1) {
                console.log(totalArray)
                let num1 = Number(totalArray[0]);
                console.log(num1);
                grandTotal -= operate(subtract, grandTotal, num1);
                
                numberText.textContent = grandTotal
            }
            else {
                numberText.textContent = grandTotal
            }
            break;
            
           
           
            
    }
})

function numberClick(value) {
    
    if(numberText.textContent.charAt(0) === '0') {
        numberText.textContent = '';
    };
   
    
    
    numberText.textContent += value;
}
function clear() {
    round = 0;
    total = '';
    realNum = 0;
    realNum2 = 0;
    grandTotal = 0;
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
