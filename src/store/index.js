import { combineReducers, createStore } from 'redux';
import { authReducer, characterReducer } from './reducers';

const rootReducer = combineReducers({
	character: characterReducer,
	auth: authReducer,
});

export default createStore(rootReducer);
