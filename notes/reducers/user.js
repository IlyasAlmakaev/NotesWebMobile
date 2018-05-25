import { GET_USER_DATA, GET_ERROR } from "../constants/User";
import { authorizeRequest } from "../requests/Requests";

const initialState = {
    data: {},
    error: ''
}

export function user(state = initialState, action) {

    switch(action.type) {
        case GET_USER_DATA:
            return { ...state, data: action.payload } 
        case GET_ERROR:
            return { ...state, error: action.payload }     
        
        default:
            return state;
    }
}

export const mapStateToProps = (state) => {
    return {
      items: state.user.data,
      error: state.user.error
    };
  };
  
export const mapDispatchToProps = (dispatch) => {
    return {
      authorizeRequest: (url, user) => dispatch(authorizeRequest(url, user)),
      setUserIDFromForm: (id) => dispatch(setUserID(id))
    };
  };