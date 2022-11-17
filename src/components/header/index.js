import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';

const Header = () => {
	return (
		<View className="flex-row items-center justify-between px-4">
			<MaterialCommunityIcons name="menu-open" size={50} color="white" />
			<Image
				source={require('../../../assets/dragonballLogo.png')}
				className="w-32 h-32 mx-auto"
				style={{ resizeMode: 'contain' }}
			/>
			<Text className="italic font-bold text-white">JR 2022</Text>
		</View>
	);
};

export default Header;
