import { lookupChar } from "./char-lookup.js";
import { expect } from "chai";


describe('lookupChar', () => {
    it('it should return undefined when ONLY the string parameter is incorrect', () => {
        // Arrange
        const incorrectString = 123;
        const correctIndex = 1;
        // Act
        const result = lookupChar(incorrectString, correctIndex);

        // Assert

        expect(result).to.be.undefined;
    })

    it('it should return undefined when ONLY the index parameter is incorrect', () => {
        // Arrange
        const correctString = "string";
        const incorrectIndex = 3.13;
        // Act
        const result = lookupChar(correctString, incorrectIndex);

        // Assert

        expect(result).to.be.undefined;
    })

    it('it should return correct input when both parameters are correct', () => {
        // Arrange
        const correctString = "string";
        const correctIndex = 3;
        // Act
        const result = lookupChar(correctString, correctIndex);

        // Assert

        expect(result).to.be.equal('i')
    })

    it('it should return "Incorrect index" when ONLY the index parameter is incorrect and out of range', () => {
        // Arrange
        const correctString = "string";
        const incorrectIndex = 1000;
        // Act
        const result = lookupChar(correctString, incorrectIndex);

        // Assert

        expect(result).to.be.equal("Incorrect index");
    })

    it('it should return "Incorrect index" when ONLY the index parameter is incorrect and negative number', () => {
        // Arrange
        const correctString = "string";
        const incorrectIndex = -1000;
        // Act
        const result = lookupChar(correctString, incorrectIndex);

        // Assert

        expect(result).to.be.equal("Incorrect index");
    })
})