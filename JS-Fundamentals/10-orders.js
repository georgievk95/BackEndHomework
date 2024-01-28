function calculator(product, quantity) {
    'use strict';
    let price = 0;
    
    if (product === 'coffee'){
        price = 1.50;
       
    } else  if (product === 'water'){
        price = 1.00;
       
    } else  if (product === 'coke'){
         price = 1.40;
        
    } else  if (product === 'snacks'){
        price = 2.00;
}

let totalPrice = price * quantity;
console.log(`${totalPrice.toFixed(2)}`);
}
calculator("snacks", 5);



function calculator(product, quantity) {
    'use strict';

    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
            break;
        default:
            console.log('Invalid product');
            return; // Exit the function if the product is invalid
    }

    let totalPrice = price * quantity;
    console.log(`${totalPrice.toFixed(2)}`);
}

// Example usage:
calculator("snacks", 5);
