import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import images from '../../../constants/images';
import { useCharacterContext } from '../../../context/CharacterContext';

const Character = ({ item, handleSnapPress }) => {
	const { changeActiveCharacter } = useCharacterContext();

	const onHandlePress = () => {
		changeActiveCharacter(item);
		handleSnapPress(0);
	};

	return (
		<TouchableOpacity
			className="items-center m-5 mx-auto rounded-md w-40"
			onPress={onHandlePress}
		>
			<View className="bg-orange-400 rounded-lg ">
				<Image
					source={images[item.id]}
					style={{ resizeMode: 'contain' }}
					className="-translate-y-6 h-44 w-44"
				/>
			</View>
			<Text
				className="mt-1 text-3xl text-black uppercase"
				style={{ fontFamily: 'Bebas-Neue' }}
			>
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default Character;
