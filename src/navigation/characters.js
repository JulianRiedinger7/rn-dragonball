import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Abilities, Attributes, Bio, Home, Info } from '../screens/index';
import { CustomDrawer } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const CharactersNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerActiveBackgroundColor: '#FBB40E',
				drawerActiveTintColor: '#202020',
				drawerInactiveTintColor: '#eaeaea',
				drawerLabelStyle: {
					marginLeft: -25,
					fontSize: 16,
					fontWeight: 'bold',
				},
				sceneContainerStyle: {
					backgroundColor: 'transparent',
				},
				drawerType: 'slide',
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{
					drawerIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={30}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Bio"
				component={Bio}
				options={{
					drawerIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'person' : 'person-outline'}
							size={30}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Abilities"
				component={Abilities}
				options={{
					drawerIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name={focused ? 'shield-sword' : 'shield-sword-outline'}
							size={30}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Attributes"
				component={Attributes}
				options={{
					drawerIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? 'heart' : 'heart-outline'}
							size={30}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default CharactersNavigator;
