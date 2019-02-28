import {createStore,combineReducers} from 'redux'
import { tabbarReducer }from './reducers/tabbarReducer'
import { listReducer } from './reducers/listReducer'




var reducer= combineReducers({
	tabbarReducer,
    listReducer
}) 
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store