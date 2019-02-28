import {createStore,combineReducers} from 'redux'
import { tabbarReducer }from './reducers/tabbarReducer'




var reducer= combineReducers({
	tabbarReducer
}) 
const store = createStore(reducer)

export default store