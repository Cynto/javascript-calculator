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
const buttonDecimal = document.querySelector('#decimal')

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

let operative = ''
let operator2 = '';
let round = 0;


// added click event listner to buttons, which goes to numberClick function.
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

const keyButton = document.querySelector('.number');


//Keyboard support
document.addEventListener('keydown', () => {
    console.log(event.key)
    //checks if keyboard input is a number
    if(Number(event.key) / 1 === Number(event.key)) {
        num = event.key;
        total += event.key;
        calc = event.key;
        numberClick(num)
        numberText.textContent = total;
    }
    else {
        //switch statement checks what keyboard operator is pressed
        switch(event.key) {
            case '.': 
                decimal()
                break;
            case 'Backspace':
                deleter();
                break;
            case '+':
                adder();
                break;
            case '-': 
                subber();
                break;
            case '/':
                divider();
                break;
            case 'x':
                multiplier();
                break;
            case '=':
                startNew('equals');
                numberClick('=');
                break;
            case 'Enter': 
                startNew('equals');
                numberClick('=');
                break;
        }
    }
})




//adding event listeners to operator buttons, so when clicked they'll use the startNew function.
buttonClear.addEventListener('click', clear);
buttonSubtract.addEventListener('click', subber)
buttonAdd.addEventListener('click', adder);
buttonMultiply.addEventListener('click', multiplier)
buttonDivide.addEventListener('click', divider)
buttonDelete.addEventListener('click',deleter)
buttonDecimal.addEventListener('click',decimal)
buttonEquals.addEventListener('click',() => {
    startNew('equals');
    numberClick('=');
})


function decimal() {
    //checks if number types already has a decimal, if it hasn't, user is able to add one.
    if(total.includes('.') === false) {
        num = '.';
        total += '.';
        calc += '.';
        numberClick(num);
    }
    console.log(total)
    console.log(total[0] === '.')
    if(total[0] === '.') {
        total = total.replace('.', '0')
        total += '.'

    }
    
}
function deleter() {
    numberText.textContent = numberText.textContent.slice(0, -1)
    total = Math.floor(total / 10);
    if (numberText.textContent.length === 0) {
        clear();
    }
}

function adder() {
    operator2 = 'add'
    if(operative === '') {
        startNew('add');
    }
    else {
        startNew(operative)
    }
    if(calc.charAt(calc.length - 1) != '+' && calc.length > 0) {
        calc += '+';
    }
    if(numberText.textContent.charAt(numberText.textContent.length - 1) != '+' && numberText.textContent.length > 0) {
        numberClick('+');
    }
}
function subber() {
    operator2 = 'subtract';
    if(operative === '') {
        startNew('subtract');
    }
    else {
        startNew(operative)
    }
    if(calc.charAt(calc.length - 1) != '-' && calc.length > 0) {
        calc += '-';
    }
    if(numberText.textContent.charAt(numberText.textContent.length - 1) != '-' && numberText.textContent.length > 0) {
        numberClick('-'); }
}
function divider() {
    operator2 = 'divide';
    if(operative === '') {
        startNew('divide');
    }
    else {
        startNew(operative)
    }


    if(calc.charAt(calc.length - 1) != 'x' && calc.length > 0) {
        calc += '÷'; }
        if(numberText.textContent.charAt(numberText.textContent.length - 1) != '÷' && numberText.textContent.length > 0) {
            numberClick('÷');
    }
}
function multiplier() {
    operator2 = 'multiply';
    if(operative === '') {
        startNew('multiply');
    }
    else {
        startNew(operative)
    }


    if(calc.charAt(calc.length - 1) != 'x' && calc.length > 0) {
        calc += 'x'; }
        if(numberText.textContent.charAt(numberText.textContent.length - 1) != 'x' && numberText.textContent.length > 0) {
            numberClick('x');
    }
}

function startNew(operator) {
    inputArray.push(Number(total));
    
    total = ''
    round += 1;
    if(inputArray[1] === 0) {
        inputArray.pop();
    }
    console.log(inputArray)
    //switch statement checks which operator was clicked
    
    switch(operator) {
        case 'add':
            
            
            console.log(inputArray.length)
            if(inputArray.length == 1) {
                operative = 'add';
                console.log('operator ' +operative)
            }
            //when the array has two elements, it'll use the operate function along with the operator clicked.
            else if(inputArray.length == 2) {
                sumText.textContent = `${inputArray[0]} + ${inputArray[1]}`
                grandTotal= operate(add, inputArray[0], inputArray[1])
                //if statement checks if the grandtotal is an integer
                if(Number.isInteger(grandTotal) === false) {
                    decimalArray = grandTotal.toString().split('.')
                    //if statement checks if the number has more than 4 decimal places.
                    if(decimalArray[1].length >= 4) {
                        grandTotal = grandTotal.toFixed(4)
                    }
                }

                inputArray = []; //when grand total is calculated, the array is reset.
                inputArray.push(grandTotal);
                operative = '';
            }
            operative = operator2;
            
            break;

        case 'subtract':
            if(inputArray.length == 1) {
                operative = 'subtract';
                console.log('operative: ' + operative)
                
            }
            else if(inputArray.length == 2) {
                sumText.textContent = `${inputArray[0]} - ${inputArray[1]}`
                grandTotal= operate(subtract, inputArray[0], inputArray[1])
                if(Number.isInteger(grandTotal) === false) {
                    decimalArray = grandTotal.toString().split('.')
                    if(decimalArray[1].length >= 4) {
                        grandTotal = grandTotal.toFixed(4)
                    }
                }
                inputArray = [];
                inputArray.push(grandTotal);
                operative = '';
            }
            operative = operator2;
            console.log('operator ' +operative)
            
        break;
        case 'multiply':
            if(inputArray.length == 1) {
                operative = 'multiply';
                console.log('operative: ' + operative)
            }
            else if(inputArray.length == 2) {
                
                
                if(inputArray[1] === 0) {
                    inputArray[1] = 1;
                } 
                sumText.textContent = `${inputArray[0]} x ${inputArray[1]}`
                grandTotal= operate(multiply, inputArray[0], inputArray[1])
                if(Number.isInteger(grandTotal) === false) {
                    decimalArray = grandTotal.toString().split('.')
                    if(decimalArray[1].length >= 4) {
                        grandTotal = grandTotal.toFixed(4)
                    }
                }
                inputArray = [];
                inputArray.push(grandTotal);
                
                operative = '';
            }
           operative = operator2;
            break;
        case 'divide':
            
            if(inputArray.length == 1) {
                operative = 'divide';
                console.log('operative: ' + operative)
            }
            else if(inputArray.length == 2) {
                //if user is dividing by 0, it'll be replaced by 1
                if(inputArray[1] === 0) {
                    inputArray[1] = 1;
                } 
                sumText.textContent = `${inputArray[0]} ÷ ${inputArray[1]}`
                grandTotal= operate(divide, inputArray[0], inputArray[1])
                if(Number.isInteger(grandTotal) === false) {
                    decimalArray = grandTotal.toString().split('.')
                    if(decimalArray[1].length >= 4) {
                        grandTotal = grandTotal.toFixed(4)
                    }
                }
                inputArray = [];
                inputArray.push(grandTotal);
                operative = '';
            }
            operative = operator2;
            
            break;
        case 'equals': 
            
            if(operator2 === 'add') {
                if(inputArray.length == 2) {
                    sumText.textContent = `${inputArray[0]} + ${inputArray[1]}`
                    grandTotal= operate(add, inputArray[0], inputArray[1])
                    if(Number.isInteger(grandTotal) === false) {
                        decimalArray = grandTotal.toString().split('.')
                        if(decimalArray[1].length >= 4) {
                            grandTotal = grandTotal.toFixed(4)
                        }
                    }
                    numberText.textContent = grandTotal;
                    inputArray = []; //when grand total is calculated, the array is reset.
                    inputArray.push(grandTotal);
                }
            }
            else if(operator2 === 'subtract') {
                if(inputArray.length == 2) {
                    sumText.textContent = `${inputArray[0]} - ${inputArray[1]}`
                    
                    grandTotal= operate(subtract, inputArray[0], inputArray[1])
                    if(Number.isInteger(grandTotal) === false) {
                        decimalArray = grandTotal.toString().split('.')
                        if(decimalArray[1].length >= 4) {
                            grandTotal = grandTotal.toFixed(4)
                        }
                    }
                    
                    inputArray = [];
                    inputArray.push(grandTotal);
                    
                }
            }
            else if(operator2 === 'multiply') {
                if(inputArray.length == 2) {
                    console.log(inputArray)
                    if(inputArray[1] === 0) {
                        inputArray[1] = 1;
                    } 
                    console.log(inputArray)
                    sumText.textContent = `${inputArray[0]} x ${inputArray[1]}`
                    grandTotal= operate(multiply, inputArray[0], inputArray[1])
                    if(Number.isInteger(grandTotal) === false) {
                        decimalArray = grandTotal.toString().split('.')
                        if(decimalArray[1].length >= 4) {
                            grandTotal = grandTotal.toFixed(4)
                        }
                    }
                    inputArray = [];
                    inputArray.push(grandTotal);
                    console.log(inputArray)
                }
            }
            else if(operator2 === 'divide') {
                if(inputArray.length == 2) {
                    if(inputArray[1] === 0) {
                        inputArray[1] = 1;
                    } 
                    sumText.textContent = `${inputArray[0]} ÷ ${inputArray[1]}`
                    grandTotal= operate(divide, inputArray[0], inputArray[1])
                    if(Number.isInteger(grandTotal) === false) {
                        decimalArray = grandTotal.toString().split('.')
                        if(decimalArray[1].length >= 4) {
                            grandTotal = grandTotal.toFixed(4)
                        }
                    }
                    inputArray = [];
                    inputArray.push(grandTotal);
                }
            }
            break;
}
}




function numberClick(value) {
    //if statement checks if the user is dividing by zero, if they are, an alert pops up.
    if(calc.includes('÷0')) {
        calc = calc.slice(0, -1);
        calc += 1;
        alert('Please try not to divide by 0!')
        total += 1;
        numberText.textContent = grandTotal

    }
    if(total.length > 1) {
        //if statement checks if the first value entered is 0, if it is, it is deleted as long as the length of the total is above 1.
        if(total.charAt(0) === '0') {
            total = total.substring(1)
        };
    }
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
    if(total >= 1e13) {
        total= 1e13;
    }
   
    
    
    
}
function clear() {
    round = 0;
    total = '';
    calc = '';
    grandTotal = 0;
    inputArray = [];
    operator2 = '';
    operative = '';
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
