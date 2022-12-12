import { Text, ScrollView } from 'react-native';
import React from 'react';
import { Featured, Header } from '../../components';
import { useSelector } from 'react-redux';

const Bio = () => {
	const activeCharacter = useSelector((state) => state.character.active);

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
