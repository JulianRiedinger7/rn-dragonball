import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Featured, Header } from '../../components';
import { useCharacterContext } from '../../context/CharacterContext';

const Bio = () => {
	const { activeCharacter } = useCharacterContext();

	return (
		<>
			<Header />
			<ScrollView>
				<Featured />
				<Text className="px-10 text-lg font-semibold leading-6 text-white">
					{activeCharacter.bio}
				</Text>
			</ScrollView>
		</>
	);
};

export default Bio;
