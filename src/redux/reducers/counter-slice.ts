import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { createGrid } from 'utils'
import { GRID } from 'typings'

// Define a type for the slice state
interface CounterState {
    grid: GRID
}

// Define the initial state using that type
const initialState = {}


export const gridSlice = createSlice({
    name: 'grid',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        create_grid: (state) => {
            return {
                ...state,
                grid: createGrid()
            }
        },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { create_grid } = gridSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default gridSlice.reducer