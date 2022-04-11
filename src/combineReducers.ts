import { Reducers, State, Action } from './types'

const combineReducers = (reducers: Reducers) => {
  const keys = Object.keys(reducers)
  const newState: State = {}
  return function newReducer(state: State, action: Action) {
    keys.forEach(key => {
      const reducer = reducers[key]
      const prevState = state[key]
      newState[key] = reducer(prevState, action)
    });
    return newState
  }
}

export default combineReducers