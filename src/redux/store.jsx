import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 异步操作
import thunk from 'redux-thunk'
import allReducer from '../redux/reducer/index'



export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))