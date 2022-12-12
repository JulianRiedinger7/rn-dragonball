import { Text, ScrollView } from 'react-native';
import { Featured, Header } from '../../components/index';
import React from 'react';
import { useSelector } from 'react-redux';

const Abilities = () => {
	const activeCharacter = useSelector((state) => state.character.active);

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
