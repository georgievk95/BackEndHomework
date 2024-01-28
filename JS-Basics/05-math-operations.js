function math(number1, number2, operation) {
    'use strict';
    let result = 0;

    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = number1 ** number2;
            break;
        default:
            console.log('Error!');
            break;

    }
    console.log(result);
}