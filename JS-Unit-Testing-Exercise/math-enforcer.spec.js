import { mathEnforcer } from "./math-enforcer.js";
import { expect } from "chai";

describe ('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined result with a string as input', () => {
            // Arrange
            const stringParam = 'string';

            // Act
            const result = mathEnforcer.addFive(stringParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return undefined result with undefined as input', () => {
            // Arrange
            const undefinedParam = undefined;

            // Act
            const result = mathEnforcer.addFive(undefinedParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return undefined result with number as input', () => {
            // Arrange
            const numberParam = undefined;

            // Act
            const result = mathEnforcer.addFive(numberParam)

            //Assert
            expect(result).to.be.undefined
        })
        it('should return undefined result with a string as input', () => {
            // Arrange
            const stringParam = 'string';

            // Act
            const result = mathEnforcer.addFive(stringParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return correct result with floating number as input', () => {
            // Arrange
            const floatingParam = 4.99;

            // Act
            const result = mathEnforcer.addFive(floatingParam)

            //Assert
            expect(result).to.be.closeTo(9.99, 0.01);
        })

        
        it('should return correct result with number as input', () => {
            // Arrange
            const floatingParam = 5;

            // Act
            const result = mathEnforcer.addFive(floatingParam)

            //Assert
            expect(result).to.be.equal(10);
        })

        it('should return correct result with big number as input', () => {
            // Arrange
            const bigNumParam = 1000000;

            // Act
            const result = mathEnforcer.addFive(bigNumParam)

            //Assert
            expect(result).to.be.equal(1000005);
        })

        it('should return correct result with negative number as input', () => {
            // Arrange
            const negativeParam = -1000000;

            // Act
            const result = mathEnforcer.addFive(negativeParam)

            //Assert
            expect(result).to.be.equal(-999995);
        })

    })


    describe('substractTen', () => {
        it('should return undefined result with a string as input', () => {
            // Arrange
            const stringParam = 'string';

            // Act
            const result = mathEnforcer.subtractTen(stringParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return undefined result with undefined as input', () => {
            // Arrange
            const undefinedParam = undefined;

            // Act
            const result = mathEnforcer.subtractTen(undefinedParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return undefined result with number as input', () => {
            // Arrange
            const numberParam = undefined;

            // Act
            const result = mathEnforcer.subtractTen(numberParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return undefined result with a string as input', () => {
            // Arrange
            const stringParam = 'string';

            // Act
            const result = mathEnforcer.subtractTen(stringParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return correct result with a string as input', () => {
            // Arrange
            const stringParam = 'string';

            // Act
            const result = mathEnforcer.subtractTen(stringParam)

            //Assert
            expect(result).to.be.undefined
        })

        it('should return correct result with floating number as input', () => {
            // Arrange
            const floatingParam = 100.10;

            // Act
            const result = mathEnforcer.subtractTen(floatingParam)

            //Assert
            expect(result).to.be.equal(90.10);
        })

        
        it('should return correct result with number as input', () => {
            // Arrange
            const floatingParam = 50;

            // Act
            const result = mathEnforcer.subtractTen(floatingParam)

            //Assert
            expect(result).to.be.equal(40);
        })

        it('should return correct result with big number as input', () => {
            // Arrange
            const bigNumParam = 1000000;

            // Act
            const result = mathEnforcer.subtractTen(bigNumParam)

            //Assert
            expect(result).to.be.equal(999990);
        })

        it('should return correct result with negative number as input', () => {
            // Arrange
            const negativeParam = -1000000;

            // Act
            const result = mathEnforcer.subtractTen(negativeParam)

            //Assert
            expect(result).to.be.equal(-1000010);
        })
    })

    describe('sum', () => {
        it('should return undefined when num1 is correct and num2 is incorrect', () =>{
            // Arrange
            const num1 = 10;
            const num2 = 'incorect format';
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.undefined;
        })

        it('should return undefined when num1 is incorrect and num2 is correct', () =>{
            // Arrange
            const num1 = 'incorect format';
            const num2 = 10;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.undefined;
        })

        it('should return undefined when both parameters are incorrect', () =>{
            // Arrange
            const num1 = 'incorect format';
            const num2 = '10';
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.undefined;
        })

        it('should return correct sum when BOTH num1 and num2 are correct', () =>{
            // Arrange
            const num1 = 20;
            const num2 = 10;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(30);
        })

        it('should return correct sum when BOTH num1 and num2 are correct and big values', () =>{
            // Arrange
            const num1 = 200000;
            const num2 = 100000;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(300000);
        })
       
        it('should return correct sum when BOTH num1 and num2 are correct and big negative values', () =>{
            // Arrange
            const num1 = -200000;
            const num2 = -100000;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(-300000);
        })

        it('should return correct sum when ONLY num1 is negative and num2 is positive number with big values', () =>{
            // Arrange
            const num1 = -200000;
            const num2 = 100000;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(-100000);
        })

        it('should return correct sum when ONLY num2 is negative and num1 is positive number with big values', () =>{
            // Arrange
            const num1 = 200000;
            const num2 = -100000;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(100000);
        })

        it('should return correct sum when ONLY num1 is 0 and num2 is positive number', () =>{
            // Arrange
            const num1 = 0;
            const num2 = 15;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(15);
        })

        it('should return correct sum when ONLY num2 is 0 and num1 is positive number', () =>{
            // Arrange
            const num1 = 10;
            const num2 = 0;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(10);
        })

        it('should return correct sum when BOTH numbers are 0s', () =>{
            // Arrange
            const num1 = 0;
            const num2 = 0;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(0);
        })

        it('should return correct sum when only num1 is float number', () =>{
            // Arrange
            const num1 = 0.5;
            const num2 = 10;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(10.5);
        })

        it('should return correct sum when only num2 is float number', () =>{
            // Arrange
            const num1 = 5;
            const num2 = 10.5;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(15.5);
        })

        it('should return correct sum when both numbers are float numbers', () =>{
            // Arrange
            const num1 = 5.1;
            const num2 = 10.5;
            // Act
            const result = mathEnforcer.sum(num1, num2);

            // Assert
            expect(result).to.be.equal(15.6);
        })
    })    
})