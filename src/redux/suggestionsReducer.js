import axios from 'axios'
require('dotenv').config()

const initialState = {
    suggestions: []
}

const GET_SUGGESTIONS = 'GET_SUGGESTIONS';
const UPDATE_STATE = 'UPDATE_STATE';
// const RESET_FIELDS = 'RESET_FIELDS';

export const updateState = e => {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}

export const getSuggestions = () => {
    return {
        type: GET_SUGGESTIONS,
        payload: axios.get('/api/selection')
    }
}


export default function suggestionsReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        // case UPDATE_STATE: 
        //     return {
        //         ...state,
        //         ...payload
        //     }
        // case RESET_FIELDS:
        //     return {
        //         ...state
        //     }
        case `${GET_SUGGESTIONS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${GET_SUGGESTIONS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                SUGGESTIONS: payload.data
            }

        default:
            return state;
    }
}