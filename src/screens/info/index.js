import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useCharacterContext } from '../../context/CharacterContext';
import images from '../../constants/images';

const Info = ({ onHandleInfo }) => {
	const { activeCharacter } = useCharacterContext();

	return (
		<ScrollView className="px-10">
			<TouchableOpacity
				className="bg-yellow-300 p-5 rounded-full w-32 self-end"
				onPress={onHandleInfo}
			>
				<Text className="text-white text-lg text-center font-bold">Back</Text>
			</TouchableOpacity>
			<Image
				source={images[activeCharacter['id']]}
				style={{ resizeMode: 'contain' }}
				className="w-80 h-80"
			/>
			<Text className="text-yellow-300 text-3xl font-bold">
				{activeCharacter.race}
			</Text>
			<Text className="text-white font-bold text-5xl uppercase">
				{activeCharacter.name}
			</Text>
			<Text className="text-white leading-5 font-semibold">
				{activeCharacter.bio}
			</Text>
			<View className="my-5">
				<Text className="text-yellow-300 text-3xl font-bold">Abilities: </Text>
				{activeCharacter.abilities.map((ability, index) => (
					<Text key={index} className="text-white text-lg font-semibold">
						{ability}
					</Text>
				))}
			</View>
		</ScrollView>
	);
};

export default Info;
