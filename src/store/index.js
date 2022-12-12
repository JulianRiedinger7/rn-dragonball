import { combineReducers, createStore } from 'redux';
import { characterReducer } from './reducers';

const rootReducer = combineReducers({
	character: characterReducer,
});

export default createStore(rootReducer);
