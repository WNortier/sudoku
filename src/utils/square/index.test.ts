import { SQUARE } from 'typings';
import isInSquare from '.';

describe('isInSquare', () => {
    test('returns true when value is in grid square', () => {
        const square: SQUARE = [
            [1, 3, 4],
            [8, 2, 7],
            [6, 9, 5]
        ]

        expect(isInSquare({ square, value: 1 })).toBeTruthy()
    })
})

describe('isInSquare', () => {
    test('returns false when value is in not in grid square', () => {
        const square: SQUARE = [
            [0, 3, 4],
            [8, 2, 7],
            [6, 9, 5]
        ]
        expect(isInSquare({ square, value: 1 })).toBeFalsy()
    })
})