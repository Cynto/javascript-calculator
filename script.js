




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

function operate(operator, num1, num2, ...num3) {
    if(arguments.length < 3) {
    return(operator(num1, num2))
    }
    else {
        for(i = 0; i < num3.length; i++) {
            total = num3[i]
           
        }
        
    }
}
