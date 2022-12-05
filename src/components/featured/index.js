import { View, Text, ActivityIndicator, Image, Dimensions } from 'react-native';
import React from 'react';
import images from '../../constants/images';
import { useCharacterContext } from '../../context/CharacterContext';
import { usePortrait } from '../../hooks/usePortrait';

const Featured = () => {
	const { activeCharacter } = useCharacterContext();
	const { isPortrait } = usePortrait();

	const { width, height } = Dimensions.get('screen');

	return (
		<View>
			{!activeCharacter ? (
				<ActivityIndicator size={'large'} />
			) : (
				<View className={`px-10 mb-10 ${isPortrait ? '' : 'flex-row'}`}>
					<Image
						source={images[activeCharacter['id']]}
						style={{
							resizeMode: 'contain',
							height: isPortrait ? height * 0.3 : height * 0.4,
							width: isPortrait ? width * 0.7 : width * 0.3,
						}}
					/>
					<View
						style={{
							height: isPortrait ? height * 0.09 : height * 0.2,
							flex: isPortrait ? 0 : 1,
						}}
					>
						<Text className="text-2xl font-semibold text-yellow-300">
							{activeCharacter.race}
						</Text>
						<Text
							className="text-6xl text-white uppercase"
							style={{ fontFamily: 'Bebas-Neue' }}
						>
							{activeCharacter.name}
						</Text>

						<Text className="text-lg text-white ">
							{activeCharacter.bio.slice(0, 88)}...
						</Text>
					</View>
				</View>
			)}
		</View>
	);
};

export default Featured;
