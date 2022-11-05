import { decrement, increment } from '../redux/reducers/counter-slice'
import { useAppSelector, useAppDispatch } from '../hooks/redux'

export function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <div>
                {count}
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}