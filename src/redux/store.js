import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import authReducer from './authReducer';

export default createStore(applyMiddleware(promise))