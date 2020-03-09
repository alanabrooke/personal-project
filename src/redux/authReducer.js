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
const GET_USER = 'GET_USER';
const LOGIN_USER = 'LOGIN_USER';
const RESET_FIELDS = 'RESET_FIELDS';


export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}
export const resetFields = () => {
    return {
        type: RESET_FIELDS
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

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user')
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

        case `${GET_USER}_PENDING`:
            return {
                ...state,
                loading: true
                }
    case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                email: payload.data.email,
                username: payload.data.username,
                zodiac_id: payload.data.zodiac_id,
                loading: false
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

        default: 
        return state;
    }
}