import { sum } from './sum.js'  
import { expect } from 'chai'
describe('The function sum', () => {
    it('should return 0 if an empty array is given', () => {
        // Arrange
        const inputArray = []
        // Act
        const result = sum(inputArray)
        // Assert
        expect(result).to.equals(0)
    })

    it('should return a single element as a sum if a single element is given', () => {
        // Arrange
        const inputArray = [2]
        // Act
        const result = sum(inputArray)
        // Assert
        expect(result).to.equals(2)
    })

    it('should return the total sum of the given array', () => {
        // Arrange
        const inputArray = [1, 2, 3, 4, 5]
        // Act
        const result = sum(inputArray)
        // Assert
        expect(result).to.equals(15)
    })
})