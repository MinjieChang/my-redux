import { Action, State } from '../../src/types';

const initialState = {
  name: 'jack',
  age: 10,
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREACE':
      return {
        ...state,
        age: state.age + 1
      }  
    default:
      return initialState
  }
}

export default reducer