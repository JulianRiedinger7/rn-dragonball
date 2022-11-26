import { View, Text, Image, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { useCharacterContext } from '../../context/CharacterContext';
import images from '../../constants/images';

const Info = () => {
	const { activeCharacter } = useCharacterContext();

	const { width, height } = Dimensions.get('screen');

	return (
		<ScrollView className="px-10">
			<Image
				source={images[activeCharacter['id']]}
				style={{
					resizeMode: 'contain',
					height: height * 0.4,
					width: width * 0.7,
				}}
			/>
			<Text className="text-3xl font-bold text-yellow-300">
				{activeCharacter.race}
			</Text>
			<Text
				className="text-white uppercase text-7xl"
				style={{ fontFamily: 'Bebas-Neue' }}
			>
				{activeCharacter.name}
			</Text>
			<Text className="text-lg font-semibold leading-6 text-white">
				{activeCharacter.bio}
			</Text>
			<View className="my-5">
				<Text className="text-3xl font-bold text-yellow-300">Abilities: </Text>
				{activeCharacter.abilities.map((ability, index) => (
					<Text key={index} className="text-lg font-semibold text-white">
						{ability}
					</Text>
				))}
			</View>
		</ScrollView>
	);
};

export default Info;
