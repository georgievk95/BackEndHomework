import { analyzeArray } from "./array-analyzer.js";
import { expect } from "chai";


describe ('analyzerArray', () => {
    it('should return undefined when input is non-array type', () => {
        // Arrange
        const inputNumber = 15;
        const inputNull = null;
        const inputUndefined = undefined;
        const inputFloatNumber = 3.3;

        // Act
        const resultNumber = analyzeArray(inputNumber);
        const resultNull = analyzeArray(inputNull);
        const resultUndefined = analyzeArray(inputUndefined);
        const resultFloat = analyzeArray(inputFloatNumber);
        // Assert 

        expect(resultNumber).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultFloat).to.be.undefined;
    })

    it ('should return correct data if the input is in the correct array type', () =>{
        // Arrange 
        const inputArray = [ 2, 3, 135 ];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({ min: 2, max: 135, length: 3})
    })

    it ('should return undefined when an empty array is given as input', () => {
        // Arrange
        const emptyArray = [];

        // Act
        const result = analyzeArray(emptyArray);
        // Assert
        expect(result).to.be.undefined;
    })

    it ('should return undefined when an empty array is given as input', () => {
        // Arrange
        const emptyArray = [];

        // Act
        const result = analyzeArray(emptyArray);
        // Assert
        expect(result).to.be.undefined;
    })

    it ('should return both min and max when only 1 is given as input', () => {
        // Arrange
        const oneNumberArray = [6];

        // Act
        const result = analyzeArray(oneNumberArray);
        // Assert
        expect(result).to.deep.equal({ min: 6, max: 6, length: 1})
    })

    it ('should return correct data if the input is in the correct array type - negative numbers only', () =>{
        // Arrange 
        const inputArray = [ -2, -3, -135, -34, -55 ];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({ min: -135, max: -2, length: 5})
    })

    it ('should return correct data if the input is in the correct array type - with equal elements', () =>{
        // Arrange 
        const inputArray = [ 2, 3, 135, 135, 2, 3, 3 ];
        // Act
        const result = analyzeArray(inputArray);
        // Assert
        expect(result).to.deep.equal({ min: 2, max: 135, length: 7})
    })
})