export type Key = string | number | symbol

export interface Store {
  subscribe: (listener: Function) => void
  dispatch: Dispatch
  getState: () => State
  replaceReducer: (newReducer: Reducer) => void
}

export interface CreateStore {
  (a?: any, b?: any, c?: any): Store
}

export interface Action {
  type: string | Symbol
  payload?: object
  [propName: string]: any
}

export interface State {
  [propName: Key]: any
}

export interface Dispatch {
  (action: Action): void
}

export interface GetState {
  (): State
}

export interface Reducer {
  (state: State, action?: Action): State
}

export interface Reducers {
  [key: Key]: Reducer
}

export interface Middle {
  (next: Dispatch): (action: Action) => void
}

export interface Middleware {
  (store: Store): Middle
}

export type ActionCreator = (...args: any[]) => Action

export interface ActionCreators {
  [name: string]: ActionCreator
}

export interface BoundActions {
  [name: string]: Function
}