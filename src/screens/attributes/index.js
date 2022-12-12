import { View, Text } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Featured, Header } from '../../components';
import { usePortrait } from '../../hooks/usePortrait';
import { useSelector } from 'react-redux';

const Attributes = () => {
	const activeCharacter = useSelector((state) => state.character.active);
	const { isPortrait } = usePortrait();

	return (
		<>
			<Header />
			<Featured />
			<View
				className={
					isPortrait ? 'px-10 space-y-5' : 'flex-row px-10 space-x-5 mt-5'
				}
			>
				<View className="flex-row items-center">
					<MaterialCommunityIcons
						name="cards-heart"
						size={40}
						color="#FBB40E"
					/>
					<Text className="text-lg font-semibold text-white">
						Health: {activeCharacter.health}
					</Text>
				</View>
				<View className="flex-row items-center">
					<MaterialCommunityIcons name="sword" size={40} color="#FBB40E" />
					<Text className="text-lg font-semibold text-white">
						Attack: {activeCharacter.attack}
					</Text>
				</View>
				<View className="flex-row items-center">
					<MaterialCommunityIcons
						name="shield-half-full"
						size={40}
						color="#FBB40E"
					/>
					<Text className="text-lg font-semibold text-white">
						Defense: {activeCharacter.defense}
					</Text>
				</View>
			</View>
		</>
	);
};

export default Attributes;
