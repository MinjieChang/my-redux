import { createStore, applyMiddleware } from '../lib/index';
import { State } from '../src/types';
import log from './middlewares/log'
import time from './middlewares/time'
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(time, log, log, log))

store.subscribe((state: State) => {
  console.log(state, 'subscribe');
})

console.log(store.getState(), 'getState22');

setTimeout(() => {
  store.dispatch({ type: 'INCREACE' })
}, 1000)

