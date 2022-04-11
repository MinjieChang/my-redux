import { Action, CreateStore, Store, State, Reducer } from './types';

type Listener = (s: State) => void
type Listeners = (Listener)[]

const createStore: CreateStore = (reducer, initialState, wrappedCreateStore): Store => {

  // initialState 作为第二个参数没有传递
  if (typeof initialState === 'function' && !wrappedCreateStore) {
    wrappedCreateStore = initialState
    initialState = {}
    return wrappedCreateStore(createStore)(reducer, initialState)
  }

  const listeners: Listeners = []

  let state = initialState || {}

  const getState = () => {
    return state
  }

  const dispatch = (action: Action) => {
    let nextState = reducer(state, action) as State
    state = nextState
    listeners.forEach((listener: Listener) => {
      listener(nextState)
    })
  }

  const subscribe = (listener: Listener) => {
    listeners.push(listener)
    // 返回退订函数
    return function unSubscribe() {
      listeners.splice(listeners.findIndex(listener), 1)
    }
  }

  const replaceReducer = (newReducer: Reducer) => {
    reducer = newReducer
    dispatch({ type: Symbol() })
  }

  dispatch({ type: Symbol() })

  const store = { getState, dispatch, subscribe, replaceReducer }

  return store
}

export default createStore