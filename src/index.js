import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, Text, View } from 'react-native';
import { CharacterList, Featured } from './components';
import { CharacterProvider } from './context/CharacterContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
	return (
		<CharacterProvider>
			<ImageBackground
				source={{
					uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmaeiq-9c642a25-4a79-49f2-b832-06ff9b31f658.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRtYWVpcS05YzY0MmEyNS00YTc5LTQ5ZjItYjgzMi0wNmZmOWIzMWY2NTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xL5XYjYpgLj3ZKw2oI8eTRw2kPmu8R1bC6_kWXoCGQY',
				}}
				resizeMode="cover"
				className="flex-1"
			>
				<View className="flex-1 pt-10 ">
					<View className="flex-row items-center justify-between px-4">
						<MaterialCommunityIcons name="menu-open" size={50} color="white" />
						<Image
							source={require('../assets/dragonballLogo.png')}
							className="w-32 h-32 mx-auto"
							style={{ resizeMode: 'contain' }}
						/>
						<Text className="text-white font-bold italic">JR 2022</Text>
					</View>
					<Featured />

					<CharacterList />

					<StatusBar style="light" />
				</View>
			</ImageBackground>
		</CharacterProvider>
	);
}
