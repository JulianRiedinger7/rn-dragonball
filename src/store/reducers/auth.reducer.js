import { authTypes } from '../types';

const { SET_USER, SIGN_OUT } = authTypes;

const initialState = {
	user: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		case SIGN_OUT:
			return {
				...state,
				user: null,
			};

		default:
			return state;
	}
};

export default authReducer;
