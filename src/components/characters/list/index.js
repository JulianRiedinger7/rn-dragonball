import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useCharactersFetch } from '../../../hooks/useCharactersFetch';
import Character from '../single';

const CharacterList = () => {
	const { data, loading } = useCharactersFetch();

	const renderItem = ({ item }) => <Character item={item} />;

	return (
		<>
			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<FlatList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={renderItem}
				/>
			)}
		</>
	);
};

export default CharacterList;
