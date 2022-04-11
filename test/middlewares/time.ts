import { Store, Action, Dispatch } from "../../src/types"; 

export default (store: Store) => (next: Dispatch) => (action: Action) => {

  console.log(Date.now(), 'Date==========>before');
  next(action)
  console.log(Date.now(), 'Date==========>after');
}