import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import images from '../../constants/images';
import { useCharacterContext } from '../../context/CharacterContext';
import { useCharactersFetch } from '../../hooks/useCharactersFetch';

const Featured = () => {
	const { activeCharacter } = useCharacterContext();
	const { loading } = useCharactersFetch();

	return (
		<View>
			{loading ? (
				<ActivityIndicator size={'large'} />
			) : (
				<View className="px-10 mb-10">
					<Image
						source={images[activeCharacter['id']]}
						style={{ resizeMode: 'contain' }}
						className="w-80 h-80"
					/>
					<Text className="text-yellow-300 text-4xl font-semibold">
						{activeCharacter.race}
					</Text>
					<Text className="text-6xl text-white font-bold uppercase">
						{activeCharacter.name}
					</Text>
					<Text className="text-white text-lg">
						{activeCharacter.bio.slice(0, 88)}...
					</Text>
				</View>
			)}
		</View>
	);
};

export default Featured;
