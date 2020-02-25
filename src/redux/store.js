import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from '../redux/authReducer'

const combineReducer = combineReducers({
    authReducer
})

export default createStore(combineReducer, applyMiddleware(promise))