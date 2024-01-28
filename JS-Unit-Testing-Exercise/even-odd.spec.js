import { isOddOrEven } from './even-odd.js';
import { expect } from 'chai';

describe('isOddOrEven', () => {
    it('should return undefined when input is non-string value type', () => {
        // Arrange
        const inputNumber = 15;
        const inputNull = null;
        const inputUndefined = undefined;
        const inputFloatNumber = 3.3;

        // Act
        const resultNumber = isOddOrEven(inputNumber);
        const resultNull = isOddOrEven(inputNull);
        const resultUndefined = isOddOrEven(inputUndefined);
        const resultFloat = isOddOrEven(inputFloatNumber);
        // Assert 

        expect(resultNumber).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultFloat).to.be.undefined;
    })

    it('should return even if even string  length is given as input', () => {
        // Arrange
        const evenStringLength = 'cacadu';
        // Act
        const result = isOddOrEven(evenStringLength);
        // Assert
        expect(result).to.be.equal('even');
    })

    it('should return odd if odd string  length is given as input', () => {
        // Arrange
        const oddStringLength = 'cockroach';
        // Act
        const result = isOddOrEven(oddStringLength);
        // Assert
        expect(result).to.be.equal('odd');
    })
})