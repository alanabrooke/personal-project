import {createStore, applyMiddleware} from 'redux';

import authReducer from './authReducer';

export default createStore(applyMiddleware(promise))