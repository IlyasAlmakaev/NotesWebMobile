import { BASE_URL } from "../constants/User";
import { GET_USER_DATA, GET_ERROR } from "../constants/User";
import { GET_USER_ID, API_GET_TASKS, GET_TASKS, API_REPLACE_TASK, 
    REPLACE_TASK, SET_TITLE, SET_BODY, GET_EDIT_TASK_DATA, 
    SET_TITLE_NEW_NOTE, SET_BODY_NEW_NOTE, API_ADD_TASK, 
    GET_TASK, SET_DONE, DELETE_TASK, API_DELETE_TASK } from "../constants/Task";

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

export function getTasksRequest(url, type, method, id) {

    let urlFull = BASE_URL + url;

    return (dispatch) => {
        fetch(urlFull, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'text/plain',
				'access_token': id
			}
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

export function addOrReplaceTaskRequest(url, type, method, id, data) {

    let urlFull = BASE_URL + url;
    let bodyData = JSON.stringify(data);

    return (dispatch) => {
        fetch(urlFull, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'access_token': id
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

export function deleteRequest(url, type, method, id, taskID) {

    let urlFull = BASE_URL + url;

    return (dispatch) => {
        fetch(urlFull, {  
			method: method,  
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'text/plain',
				'access_token': id
			}
        })
        .then((res) => {
			if (res.status !== 200 && !res.ok) {
                throw Error(res.statusText);
            } 
				
			return res;
        })
        .then((res) => res.json())
        .then(dispatch({ type: type, payload: taskID }))
        .catch((error) => dispatch({ type: GET_ERROR, payload: error.message }));
    }
}

export function authorizeRequest(url, user) {
    return commonAuthorizeRequest(url, user, GET_USER_DATA, 'post')
}

export function setUserID(id) {
    return (dispatch) => {
        dispatch({ type: GET_USER_ID, payload: id })
    }
}

export function setEditTaskData(data) {
    return (dispatch) => {
        dispatch({ type: GET_EDIT_TASK_DATA, payload: data })
    }
}

export function setTitle(title) {
    return (dispatch) => {
        dispatch({ type: SET_TITLE, payload: title })
    }
}

export function setBody(body) {
    return (dispatch) => {
        dispatch({ type: SET_BODY, payload: body })
    }
}

export function setDone(done) {
    return (dispatch) => {
        dispatch({ type: SET_DONE, payload: done })
    }
}

export function setTitleNewNote(titleNewNote) {
    return (dispatch) => {
        dispatch({ type: SET_TITLE_NEW_NOTE, payload: titleNewNote })
    }
}

export function setBodyNewNote(bodyNewNote) {
    return (dispatch) => {
        dispatch({ type: SET_BODY_NEW_NOTE, payload: bodyNewNote })
    }
}

export function getTasks(id) {
    return getTasksRequest(API_GET_TASKS, GET_TASKS, 'get', id)
}

export function addTask(id, data) {
    return addOrReplaceTaskRequest(API_ADD_TASK, GET_TASK, 'post', id, data)
}

export function replaceTask(id, taskID, data) {
    let url = API_REPLACE_TASK + `/${taskID}/replace`
    return addOrReplaceTaskRequest(url, REPLACE_TASK, 'post', id, data)
}

export function deleteTask(id, taskID) {
    let url = API_DELETE_TASK + '/' + taskID
    return deleteRequest(url, DELETE_TASK, 'delete', id, taskID)
} 

