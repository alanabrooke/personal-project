import axios from 'axios';

const initialState = {
    email:'',
    username: '',
    password: '',
    zodiac_id: null,
    user: [],
    loading: false
}

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get('/auth/user/{user_id}')
    }
}

const GET_USER = 'GET_USER';
const UPDATE_STATE = 'UPDATE_STATE';
const DELETE_USER = 'DELETE_USER';
const EDIT_USER = 'EDIT_USER';


export default function accountReducer(state = initialState, action) {
    const {payload} = action;
    switch(action.type) {
        case UPDATE_STATE: 
        return {
            ...state,
            ...payload
        }
        case `${GET_USER}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                user: payload.data
            }
            default:
            return state;
        }
    }