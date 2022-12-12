import { characterTypes } from '../types';

const { CHANGE_ACTIVE } = characterTypes;

export const changeActive = (character) => ({
	type: CHANGE_ACTIVE,
	character: character,
});
