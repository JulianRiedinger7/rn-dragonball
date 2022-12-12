import { CHARACTERS } from '../../data/index';
import { characterTypes } from '../types';

const { CHANGE_ACTIVE } = characterTypes;

const initialState = {
	characters: CHARACTERS,
	active: CHARACTERS[0],
};

const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE:
			return {
				...state,
				active: action.character,
			};

		default:
			return state;
	}
};

export default characterReducer;
