function printObjectProperties(city) {
    'use strict';

    for (let key in city) {
        console.log(`${key} -> ${city[key]}`);
    }
}

// Example usage:
let city1 = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

let city2 = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
};

printObjectProperties(city1);
printObjectProperties(city2);
