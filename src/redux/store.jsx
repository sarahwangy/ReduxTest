import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// 异步操作
import thunk from 'redux-thunk'
import countReducer from './reducer/count_reducer'
import personReducer from './reducer/perReducer'

const allReducer = combineReducers({
    sum: countReducer,
    persons: personReducer
})


export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))