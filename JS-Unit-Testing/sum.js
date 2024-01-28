export function sum(arr) {
    'use strict';
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
