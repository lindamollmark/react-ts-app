import {useReducer} from "react";

type CounterState = {
    count: number
}

type CounterAction = {
    type: string,
    payload: number
}
const initialState = {
    count: 0
}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.payload}
        case 'DECREMENT':
            return {count: state.count - action.payload}
        default:
            return state;

    }
}

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = () => {
        dispatch({type: 'INCREMENT', payload: 1})
    }
    const decrement = () => {
        dispatch({type: 'DECREMENT', payload: 1})

    }
    return (
        <div>
            <h3> Counter value: {state.count} </h3>

            <button onClick={increment} style={{backgroundColor: 'blue', color: 'white'}}>increment</button>
            <button onClick={decrement} style={{backgroundColor: 'blue', color: 'white'}}>decrement</button>
        </div>
    )
}

export default UseReducerCounter;