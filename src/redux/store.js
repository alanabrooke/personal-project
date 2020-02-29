import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from '../redux/authReducer'
import suggestionsReducer from '../redux/suggestionsReducer'

const combineReducer = combineReducers({
    authReducer,
    suggestionsReducer
})

export default createStore(combineReducer, applyMiddleware(promise))