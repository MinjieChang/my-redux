import { Action, State } from '../../src/types';

const initialState = [
  {
    goodName: 'shoes',
    price: 100,
  }
]

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_GOODS':
      return [...initialState, { goodName: 't-shirts', price: 50 }]
    case 'REDUCE_GOODS':
        return [{goodName: 't-shirts', price: 50}]
    default:
      return initialState
  }
}

export default reducer