import createGrid from '.';

describe('createGrid', () => {
    test('it should create a 9x9 Sudoku grid with values ranging from 1 to 9', () => {
        const grid = createGrid();
        for (let row in grid) {
            for (let col in grid[row]) {
                expect(grid[row][col]).toBeGreaterThanOrEqual(1)
                expect(grid[row][col]).toBeLessThanOrEqual(9)
            }
        }
    })
})