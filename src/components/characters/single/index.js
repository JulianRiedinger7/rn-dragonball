import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '../../../constants/images';
import { useCharacterContext } from '../../../context/CharacterContext';

const Character = ({ item }) => {
	const { changeActiveCharacter } = useCharacterContext();

	return (
		<TouchableOpacity
			className="items-center m-5 rounded-md w-44"
			onPress={() => changeActiveCharacter(item)}
		>
			<View className="bg-orange-400 rounded-lg ">
				<Image
					source={images[item.id]}
					style={{ resizeMode: 'contain' }}
					className="-translate-y-6 h-44 w-44"
				/>
			</View>
			<Text className="mt-1 text-2xl font-bold text-white uppercase">
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default Character;
