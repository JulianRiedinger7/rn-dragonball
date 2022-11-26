import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CharactersNavigator from './characters';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<CharactersNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
