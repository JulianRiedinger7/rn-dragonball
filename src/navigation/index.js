import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CharactersNavigator from './characters';
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';

const AppNavigator = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<NavigationContainer>
			{user ? <CharactersNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default AppNavigator;
