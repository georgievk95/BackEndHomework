function largestNumber(num1, num2, num3) {
    'use strict';
    let result = 0;

    if (num1 > num2 && num1 > num3) {
        result = num1;
    }
    else if (num2 > num1 && num2 > num3) {
        result = num2;
    }
    else if (num3 > num1 && num3 > num2) {
        result = num3;
    }
    console.log(`The largest number is ${result}.`);

    solve(5, -3, 15);
}

// const result = Math.max(num1, num2, num3); => 1 line solution