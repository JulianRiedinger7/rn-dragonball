import { createContext, useContext, useEffect } from 'react';
import { useCharactersFetch } from '../hooks/useCharactersFetch';
import { useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
	const { loading, data } = useCharactersFetch();
	const [activeCharacter, setActiveCharacter] = useState();

	useEffect(() => {
		setActiveCharacter(data[0]);
	}, [data]);

	const changeActiveCharacter = (item) => setActiveCharacter(item);

	console.log(activeCharacter);

	return (
		<CharacterContext.Provider
			value={{ activeCharacter, changeActiveCharacter }}
		>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacterContext = () => {
	const context = useContext(CharacterContext);

	if (!context)
		throw new Error('useAuthContext must be used within an AuthProvider');
	return context;
};
