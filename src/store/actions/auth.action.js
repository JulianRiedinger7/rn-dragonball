import { authTypes } from '../types';

const { SET_USER, SIGN_OUT } = authTypes;

export const setUser = (user) => ({
	type: SET_USER,
	user: user,
});

export const userSignOut = () => ({
	type: SIGN_OUT,
});
