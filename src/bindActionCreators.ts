import { ActionCreator ,ActionCreators, Dispatch, BoundActions } from "./types";
// const actions = {
//   increment () {
//     return store.dispatch(increment.apply(this, arguments))
//   },
//   setName() {
//     return store.dispatch(setName.apply(this, arguments))
//   }
// }

// actions.increment()

const actionCreator = (creator: ActionCreator, dispatch: Dispatch) => {
  return function name() {
    return dispatch(creator.apply(this, arguments))
  }
}

const bindActionCreators = (actionCreators: ActionCreators, dispatch: Dispatch) => {

  if (typeof actionCreators === 'function') {
    return actionCreator(actionCreators, dispatch)
  }

  let boundActions: BoundActions = {}
  Object.keys(actionCreators).forEach(key => {
    boundActions[key] = actionCreator(actionCreators[key], dispatch)
  })

  return boundActions
}

// function increment() {
//   return {
//     type: 'INCREMENT'
//   }
// }

// function setName(name: any) {
//   return {
//     type: 'SET_NAME',
//     name: name
//   }
// }

// const actions = bindActionCreators({ increment, setName }, store.dispatch)
// console.log(actions, 66666);
// if (typeof actions === 'object') {
//   console.log(actions.increment(), 99999);
// }

export default bindActionCreators
