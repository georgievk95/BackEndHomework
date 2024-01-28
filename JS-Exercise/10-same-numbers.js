function solve(number) {
    'use strict';

    let totalSum = 0;
    let allDigitsAreSame = true;
    const firstDigit = number % 10;
    while (number > 0) {
        const currentDigit = number % 10;

        if (firstDigit != currentDigit) {
            allDigitsAreSame = false;
        }
        totalSum += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(allDigitsAreSame)
    console.log(totalSum);
}