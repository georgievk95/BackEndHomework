function arrayRotation(inputArray, numOfRotations){
    'use strict';

    for (let index = 0; index < numOfRotations; index++) {
        const firstElement = inputArray.shift();
        inputArray.push(firstElement)
        
    }
    console.log(inputArray.join(' '));
}