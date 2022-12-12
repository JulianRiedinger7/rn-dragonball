import { View, Text, ActivityIndicator, Image, Dimensions } from 'react-native';
import React from 'react';
import images from '../../constants/images';
import { usePortrait } from '../../hooks/usePortrait';
import { useSelector } from 'react-redux';

const Featured = () => {
	const activeCharacter = useSelector((state) => state.character.active);
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
						<Text className="text-4xl font-semibold text-yellow-300">
							{activeCharacter.race}
						</Text>
						<Text
							className="text-white uppercase text-7xl"
							style={{ fontFamily: 'Bebas-Neue' }}
						>
							{activeCharacter.name}
						</Text>
					</View>
				</View>
			)}
		</View>
	);
};

export default Featured;
