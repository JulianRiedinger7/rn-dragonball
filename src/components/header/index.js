import { Image, SafeAreaView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
	const navigation = useNavigation();

	return (
		<SafeAreaView className="flex-row items-center justify-between px-4">
			<Ionicons
				name="menu"
				size={35}
				color="white"
				onPress={() => navigation.openDrawer()}
			/>
			<Image
				source={require('../../../assets/dragonballLogo.png')}
				className="w-32 h-32 mx-auto"
				style={{ resizeMode: 'contain' }}
			/>
			<Text className="font-bold text-white text-md">JR 2022</Text>
		</SafeAreaView>
	);
};

export default Header;
