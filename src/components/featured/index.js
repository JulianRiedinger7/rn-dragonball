import { View, Text, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { useCharactersFetch } from '../../hooks/useCharactersFetch';
import images from '../../constants/images';

const Featured = () => {
	const { data, loading } = useCharactersFetch();

	return (
		<View>
			{loading ? (
				<ActivityIndicator size={'large'} />
			) : (
				<View className="px-10 mb-10">
					<Image
						source={images.goku}
						style={{ resizeMode: 'contain' }}
						className="w-80 h-80"
					/>
					<Text className="text-yellow-300 text-4xl font-semibold">
						{data[0].race}
					</Text>
					<Text className="text-6xl text-white font-bold uppercase">
						{data[0].name}
					</Text>
					<Text className="text-white text-lg">{data[0].bio.slice(0, 88)}</Text>
				</View>
			)}
		</View>
	);
};

export default Featured;
