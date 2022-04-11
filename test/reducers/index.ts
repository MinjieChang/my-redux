import { combineReducers } from "../../src/index";
import { Reducers } from '../../src/types'
import user from './user'
import goods from './goods'

const reducer = combineReducers({ user, goods } as any)

export default reducer