import { Image, SafeAreaView } from 'react-native';

import React from 'react';

const Header = () => {
	return (
		<SafeAreaView className="flex-row items-center justify-between px-4">
			<Image
				source={require('../../../assets/dragonballLogo.png')}
				className="w-32 h-32 mx-auto"
				style={{ resizeMode: 'contain' }}
			/>
		</SafeAreaView>
	);
};

export default Header;
