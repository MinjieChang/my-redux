import { Middleware, CreateStore, Reducer, State, Store } from './types'
import compose from "./compose";

const applyMiddleware = (...middlewares: Middleware[]) => {

  return function wrappedCreateStore(oldCreateStore: CreateStore) {
    
    return function newCreateStore (reducer: Reducer, initialState: State) {

      const store = oldCreateStore(reducer, initialState)

      const partialStore = { getState: store.getState }

      const midders = middlewares.map((item: Middleware) => item(partialStore as Store))

      store.dispatch = compose(midders)(store.dispatch)
      // midders.reverse().forEach((middle: Middle) => {
      //   store.dispatch = middle(store.dispatch)
      // });

      return store
    }
  }
}

export default applyMiddleware