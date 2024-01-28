function sumArray(n, input) {
    'use strict';

    let reverseArray = [];
    for (let index = 0; index < n; index ++) {
        reverseArray.unshift(input[index]);
    }

    console.log(reverseArray.join(" "));

}

sumArray (3, [10, 20, 30, 40, 50])