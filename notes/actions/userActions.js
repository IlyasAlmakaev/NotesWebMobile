import { GET_USER_DATA, GET_ERROR } from "../constants/User";

export function getData(data) {
    return(dispatch) => {
        dispatch({
            type: GET_USER_DATA,
            payload: data
        })
    }
}

export function getError(error) {
    return(dispatch) => {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }
}