import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'

//reducers
import authReducer from '../redux/authReducer'
import suggestionsReducer from '../redux/suggestionsReducer'
import accountReducer from '../redux/accountReducer'

const combineReducer = combineReducers({
    authReducer,
    suggestionsReducer,
    accountReducer
})

export default createStore(combineReducer, applyMiddleware(promise))