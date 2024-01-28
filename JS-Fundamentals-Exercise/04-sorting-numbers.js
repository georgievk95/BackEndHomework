function solve(numbers){
    'use strict';

    numbers.sort((a, b) => a - b)

    const result = [];

    while (numbers.length > 0){
        const firstElement = numbers.shift()
        const lastElement = numbers.pop()


        result.push(firstElement)
        if (lastElement !== undefined){
            result.push(lastElement);
        }


    }
    return result
}