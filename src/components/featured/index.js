import {
	View,
	Text,
	ActivityIndicator,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import { useCharacterContext } from '../../context/CharacterContext';

const Featured = ({ onHandleInfo }) => {
	const { activeCharacter } = useCharacterContext();

	return (
		<View>
			{!activeCharacter ? (
				<ActivityIndicator size={'large'} />
			) : (
				<View className="px-10 mb-10">
					<Image
						source={images[activeCharacter['id']]}
						style={{ resizeMode: 'contain' }}
						className="w-80 h-80"
					/>
					<Text className="text-3xl font-semibold text-yellow-300">
						{activeCharacter.race}
					</Text>
					<Text className="text-5xl font-bold text-white uppercase">
						{activeCharacter.name}
					</Text>

					<Text className="text-lg text-white ">
						{activeCharacter.bio.slice(0, 88)}...
					</Text>
					<TouchableOpacity
						className="self-center p-2 text-white bg-yellow-300 rounded-full"
						onPress={onHandleInfo}
					>
						<Text className="text-lg font-bold text-white">More info</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default Featured;
