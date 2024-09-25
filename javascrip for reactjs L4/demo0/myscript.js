console.log('my name is semmy wellem taju')

function simpleCalculator(operator, num1, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('invalid operator');
            return;
    }
    console.log('result of ${num1} ${operator} ${num2} is: ${result}');
    alert('result is : ${result}');
}

simpleCalculator('+', 5, 3);