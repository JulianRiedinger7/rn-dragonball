import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import { CharacterProvider } from './context/CharacterContext';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigation/index';

export default function App() {
	const [loaded] = useFonts({
		'Bebas-Neue': require('../assets/fonts/BebasNeue-Regular.ttf'),
	});

	if (!loaded)
		return (
			<ActivityIndicator
				size={'large'}
				className="items-center justify-center flex-1"
			/>
		);

	return (
		<Provider store={store}>
			<ImageBackground
				source={{
					uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmaeiq-9c642a25-4a79-49f2-b832-06ff9b31f658.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtYWVpcS05YzY0MmEyNS00YTc5LTQ5ZjItYjgzMi0wNmZmOWIzMWY2NTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xL5XYjYpgLj3ZKw2oI8eTRw2kPmu8R1bC6_kWXoCGQY',
				}}
				resizeMode="cover"
				className="flex-1"
			>
				<StatusBar style="light" />
				<AppNavigator />
			</ImageBackground>
		</Provider>
	);
}
