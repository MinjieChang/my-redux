import { Store, Action, Dispatch } from "../../src/types"; 

export default (store: Store) => (next: Dispatch) => (action: Action) => {

  console.log(store.getState(), 'state==========>before');
  next(action)
  console.log(store.getState(), 'state==========>after');
}