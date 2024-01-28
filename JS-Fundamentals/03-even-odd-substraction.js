function substraction(arr) {
    'use strict';
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i ++) {
        let currentNumber = Number(arr[i]);

        if (currentNumber % 2 == 0){
            evenSum += currentNumber;
        } else if (currentNumber %2 != 0){
            oddSum += currentNumber;
        }
    }
    console.log(evenSum-oddSum);


}