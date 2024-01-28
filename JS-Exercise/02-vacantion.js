function solve(numberOfPeople, typeOfGroup, dayOfWeek) {
    'use strict';
    let totalAmount = 0;

    if (dayOfWeek === 'Friday'){
        if(typeOfGroup === 'Students') {
            totalAmount = numberOfPeople * 8.45;
            if (numberOfPeople >=30) {
                totalAmount = totalAmount * 0.85;
            }
        } else if (typeOfGroup === 'Business') {
            totalAmount = numberOfPeople * 10.90;
            if (numberOfPeople >=100) {
                const pricePerNight = totalAmount / numberOfPeople;
                totalAmount = pricePerNight * (numberOfPeople - 10);
            }
        } else if (typeOfGroup === 'Regular') {
            totalAmount = numberOfPeople * 15;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalAmount = totalAmount * 0.95;
            }
        }
    } else if (dayOfWeek === 'Saturday') {
        if(typeOfGroup === 'Students') {
            totalAmount = numberOfPeople * 9.80;
            if (numberOfPeople >=30) {
                totalAmount = totalAmount * 0.85;
            }
        } else if (typeOfGroup === 'Business') {
            totalAmount = numberOfPeople * 15.60;
            if (numberOfPeople >=100) {
                const pricePerNight = totalAmount / numberOfPeople;
                totalAmount = pricePerNight * (numberOfPeople - 10);
            }
        } else if (typeOfGroup === 'Regular') {
            totalAmount = numberOfPeople * 20;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalAmount = totalAmount * 0.95;
            }
        }
    } else if (dayOfWeek === 'Sunday') {
        if(typeOfGroup === 'Students') {
            totalAmount = numberOfPeople * 10.46;
            if (numberOfPeople >=30) {
                totalAmount = totalAmount * 0.85;
            }
        } else if (typeOfGroup === 'Business') {
            totalAmount = numberOfPeople * 16;
            if (numberOfPeople >=100) {
                const pricePerNight = totalAmount / numberOfPeople;
                totalAmount = pricePerNight * (numberOfPeople - 10);
            }
        } else if (typeOfGroup === 'Regular') {
            totalAmount = numberOfPeople * 22.50;
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalAmount = totalAmount * 0.95;
            }
        }
    }

    console.log(`Total price: ${totalAmount.toFixed(2)}`);
}

solve (30,
    "Students",
    "Sunday")