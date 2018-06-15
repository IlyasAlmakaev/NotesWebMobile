import { GET_USER_DATA, GET_ERROR, GET_USER_EMAIL } from "../constants/User";

const initialState = {
    data: {},
    error: '',
    email: ''
}

export function user(state = initialState, action) {

    switch(action.type) {
        case GET_USER_DATA:
            return { ...state, data: action.payload } 
        case GET_ERROR:
            return { ...state, error: action.payload }  
        case GET_USER_EMAIL:
            return { ...state, email: action.payload }    
        
        default:
            return state;
    }
}
