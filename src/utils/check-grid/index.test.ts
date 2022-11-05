import checkGrid from '.'

describe('It should check if the grid has been populated or not', () => {
    test('It returns true if the grid is full', () => {
        expect(
            checkGrid([
                [8, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 9, 2, 4, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 1, 8, 2, 3, 9],
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 6],
            ])
        ).toBeTruthy()
    })

    test('It returns false if the grid is not full', () => {
        expect(
            checkGrid([
                [8, 4, 2, 6, 5, 1, 3, 9, 7],
                [5, 3, 7, 2, 8, 9, 6, 4, 1],
                [6, 9, 1, 7, 3, 4, 5, 2, 8],
                [1, 6, 3, 8, 4, 5, 9, 7, 2],
                [7, 5, 8, 1, 9, 2, 4, 6, 3],
                [9, 2, 4, 3, 7, 6, 1, 8, 5],
                [4, 7, 6, 5, 0, 8, 2, 3, 9], //a zero is in this row
                [2, 8, 5, 9, 6, 3, 7, 1, 4],
                [3, 1, 9, 3, 1, 7, 8, 5, 6],
            ])
        ).toBeFalsy()
    })
})