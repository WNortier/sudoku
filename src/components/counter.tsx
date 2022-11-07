import { create_grid } from '../redux/reducers/counter-slice'
import { useAppSelector, useAppDispatch } from '../hooks/redux'

export function Counter() {
    // const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => { }}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(create_grid())}
                >
                    Create Grid
                </button>
            </div>
        </div>
    )
}