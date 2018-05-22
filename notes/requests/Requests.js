import { BASE_URL } from "../constants/User";
import { GET_USER_DATA, GET_ERROR } from "../constants/User";

export function commonAuthorizeRequest(url, user, type, method) {

    let urlFull = BASE_URL + url;
    let bodyData = JSON.stringify(user);

    return (dispatch) => {
        fetch(urlFull, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},  
			body: bodyData
        })
        .then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then((items) => dispatch({ type: type, payload: items }))
        .catch((error) => dispatch({ type: GET_ERROR, payload: error.message }));
    }
}

export function authorizeRequest(url, user) {
    return commonAuthorizeRequest(url, user, GET_USER_DATA, 'post')
}