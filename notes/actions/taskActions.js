import { GET_USER_ID, GET_ERROR, GET_TASKS, GET_TASK, API_DELETE_TASK,
    GET_EDIT_TASK_DATA, REPLACE_TASK, SET_TITLE, SET_BODY  } from "../constants/Task";

export function getID(id) {
    return(dispatch) => {
        dispatch({
            type: GET_USER_ID,
            payload: id
        })
    }
}

export function setTitle(title) {
    return(dispatch) => {
        dispatch({
            type: SET_TITLE,
            payload: title
        })
    }
}

export function setBody(body) {
    return(dispatch) => {
        dispatch({
            type: SET_BODY,
            payload: body
        })
    }
}

export function getEditTaskData(data) {
    return(dispatch) => {
        dispatch({
            type: GET_EDIT_TASK_DATA,
            payload: data
        })
    }
}

export function getTasks(tasks) {
    return(dispatch) => {
        dispatch({
            type: GET_TASKS,
            payload: tasks
        })
    }
}

export function addTask(task) {
    return(dispatch) => {
        dispatch({
            type: GET_TASK,
            payload: task
        })
    }
}

export function replaceTask(replacedTask) {
    return(dispatch) => {
        dispatch({
            type: REPLACE_TASK,
            payload: replacedTask
        })
    }
}

export function deleteTask(deletedTask) {
    return(dispatch) => {
        dispatch({
            type: DELETE_TASK,
            payload: deletedTask
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