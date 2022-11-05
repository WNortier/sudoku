import { GRID, NUMBERS } from 'typings'
import { isInRow, isInCol } from '../is-in'
import shuffle from 'utils/shuffle'

const gridExample: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recurcive function to check all the possible combinations of numbers until a solution is found 
 * @param grid 
 */
const populateGrid = (grid: GRID) => {
    let row = 0
    let col = 0

    for (let i = 0; i < 81; i++) {
        row = Math.floor(i / 9)
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)

            for (let value of numbers) {
                //is it not in grid row?
                if (!isInRow({ grid, row, value })) {
                    //is it not in grid col?

                    if (!isInCol({ col, grid, value })) {
                        //is it not in the grid square?
                        grid[row][col] = value
                    }


                }
            }

            break;
        }

    }


    grid[row][col] = 0
}

export default populateGrid
