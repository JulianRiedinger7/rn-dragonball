import { Text, ScrollView } from 'react-native';
import { useCharacterContext } from '../../context/CharacterContext';
import { Featured, Header } from '../../components/index';
import React from 'react';

const Abilities = () => {
	const { activeCharacter } = useCharacterContext();

	return (
		<>
			<Header />
			<ScrollView>
				<Featured />

				{activeCharacter.abilities.map((ability, i) => (
					<Text
						key={i}
						className="px-10 text-lg font-semibold leading-6 text-white"
					>
						{ability}
					</Text>
				))}
			</ScrollView>
		</>
	);
};

export default Abilities;
