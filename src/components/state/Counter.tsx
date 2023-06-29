import { useReducer } from 'react'

type CounterState = {
  count: string
}

type CounterAction = {
const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      case 'reset':
        return initialState
    default:
      return state
  }
}


export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Increment 10
      </button>
    </>
  )
}
