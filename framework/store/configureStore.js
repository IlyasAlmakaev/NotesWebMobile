import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(extraArgument) {

    const store = createStore(rootReducer, 
        applyMiddleware(thunk.withExtraArgument(extraArgument)))

    return store;
}