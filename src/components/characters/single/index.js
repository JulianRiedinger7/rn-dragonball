import { View, Text, Image } from 'react-native';
import React from 'react';
import images from '../../../constants/images';

const Character = ({ item }) => {
	return (
		<View className="items-center w-screen my-5 rounded-md">
			<View className="bg-orange-400 rounded-lg ">
				<Image
					source={images[item.id]}
					style={{ resizeMode: 'contain' }}
					className="-translate-y-6 h-44 w-44"
				/>
			</View>
			<Text className="mt-1 text-2xl font-medium text-white uppercase">
				{item.name}
			</Text>
		</View>
	);
};

export default Character;
