import {combineReducers, createStore} from 'redux';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
    appReducer: AppReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;

