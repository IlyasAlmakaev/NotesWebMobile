import { GET_USER_ID, GET_TASKS, GET_TASK, GET_ERROR, DELETE_TASK,
    GET_EDIT_TASK_DATA, REPLACE_TASK, SET_TITLE, SET_BODY, SET_TITLE_NEW_NOTE, SET_BODY_NEW_NOTE, SET_DONE } from "../constants/Task";
import undoable, { includeAction } from 'redux-undo';    

const initialState = {
    id: '',
    tasks: [],
    task: {},
    error: '',
    data: [],
    titleNewNote: '',
    bodyNewNote: ''
}

function task(state = initialState, action) {

    switch(action.type) {
        case GET_USER_ID:
            return { ...state, id: action.payload } 
        case SET_TITLE:
            return { ...state, data: { ...state.data, title: action.payload } }
        case SET_BODY:
            return { ...state, data: { ...state.data, body: action.payload } } 
        case SET_DONE:
            return { ...state, data: { ...state.data, done: action.payload } }
        case SET_TITLE_NEW_NOTE:
            return { ...state, titleNewNote: action.payload }
        case SET_BODY_NEW_NOTE:
            return { ...state, bodyNewNote: action.payload  } 
        case GET_EDIT_TASK_DATA:
            return { ...state, data: action.payload } 
        case GET_TASKS:
            return { ...state, tasks: action.payload }
        case GET_TASK:
            return { ...state, task: action.payload }
        case REPLACE_TASK:
            return { ...state, tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            }) }     
        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter(item => item.id !== action.payload) }       
        case GET_ERROR:
            return { ...state, error: action.payload }     
        
        default:
            return state;
    }
}

const undoableTask = undoable(task, {
    filter: includeAction([SET_TITLE, SET_BODY, SET_DONE, SET_TITLE_NEW_NOTE, SET_BODY_NEW_NOTE])
})

export default undoableTask