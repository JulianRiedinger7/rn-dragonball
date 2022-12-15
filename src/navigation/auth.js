import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: 'transparent',
				},
			}}
		>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
