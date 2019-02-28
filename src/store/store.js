import {createStore,combineReducers} from 'redux'
import { tabbarReducer }from './reducers/tabbarReducer'
import { listReducer } from './reducers/listReducer'
import { products }from './reducers/products'




var reducer= combineReducers({
	tabbarReducer,
    listReducer,
    products
}) 
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store