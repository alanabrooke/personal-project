import axios from 'axios';

const initialState = {
    email:'',
    username: '',
    password: '',
    zodiac_id: null,
    user: [],
    loading: false
}

//constants
const UPDATE_STATE = 'UPDATE_STATE';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const RESET_FIELDS = 'RESET_FIELDS';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const registerUser = (email, username, password, zodiac_id) => {
return {
    type: REGISTER_USER,
    payload: axios.post('/auth/register', {
        email,
        username,
        password,
        zodiac_id,
    })
}
}
export const resetFields = () => {
    return {
        type: RESET_FIELDS
    }
}

export const loginUser = (username,password) => {
   return { type: LOGIN_USER,
    payload: axios.post('/auth/login', {
        username,
        password
    })
}
}
export const logout = ()  => {
    return {
        type: LOGOUT_USER,
        payload: axios.post('/auth/logout/')
    }
}



export default function authReducer(state = initialState, action) {
    const {payload} = action;
    switch(action.type) {
        case UPDATE_STATE: 
        return {
            ...state,
            ...payload
        }
        case RESET_FIELDS:
            return {
                ...state
            }
        case `${REGISTER_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                loading: false
            }
        case `${LOGIN_USER}_PENDING`:
            return {
                ...state,
                loading: true,
            }
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: payload.data
            }
        case `${LOGOUT_USER}_PENDING`:
            return {
                ...state,
                loading: true
    }
        case `${LOGOUT_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: payload.data
            }
        default: 
        return state;
    }
}