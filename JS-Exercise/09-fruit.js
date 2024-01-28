function solve(typeFruit, weight, priceKg) {
    'use strict';
    const pricePerGram = priceKg / 1000;
    const totalPrice = weight * pricePerGram;
    const weightInKg = weight / 1000;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeFruit}.`);
} 

solve ('orange', 2500, 1.80);