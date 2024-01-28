import { isSymmetric } from "./chech-for-symmetry.js";
import { expect } from "chai";

describe ('isSymmetric', () => {
    it ('should return false if non-symmmetric array is given', () => {
        // Arrange
        const imputArray = ['a', '1', 12]
        // Act
        const nanResult = isSymmetric(NaN)
        const undefinedResult = isSymmetric(undefined)
        const objectResult = isSymmetric({})
        const nullResult = isSymmetric(null) 
        // Assert

        expect(nanResult).to.be.false
        expect(undefinedResult).to.be.false
        expect(undefinedResult).to.be.false
        expect(nullResult).to.be.false
    })

    it ('should return true if an empty array is given', () => {
        // Arrange
        const inputArray = []

        // Act
        const result = isSymmetric(inputArray)

        // Assert
        expect(result).to.be.true
    })

    it ('should return true if an symmetrical array is given', () => {
        // Arrange
        const inputArray = [1, 2, 3, 2, 1]

        // Act 
        const result = isSymmetric(inputArray)

        // Assert 

        expect(result).to.be.true
    })
}) 