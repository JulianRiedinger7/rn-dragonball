import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Info } from '../screens/index';

const Stack = createNativeStackNavigator();

const CharactersNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Characters">
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="Characters"
				component={Home}
			/>
			<Stack.Screen name="Info" component={Info} />
		</Stack.Navigator>
	);
};

export default CharactersNavigator;
