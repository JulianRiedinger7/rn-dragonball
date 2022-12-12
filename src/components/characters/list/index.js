import React, { useCallback, useRef } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import Character from '../single';
import { useSelector } from 'react-redux';

const CharacterList = () => {
	const data = useSelector((state) => state.character.characters);

	const { height } = Dimensions.get('screen');

	const numColumns = 2;

	const sheetRef = useRef(null);

	const snapPoints = height <= 640 ? ['15%', '80%'] : ['20%', '80%'];

	const handleSnapPress = useCallback((index) => {
		sheetRef.current?.snapToIndex(index);
	});

	const renderItem = ({ item }) => (
		<Character item={item} handleSnapPress={handleSnapPress} />
	);

	return (
		<>
			{!data ? (
				<ActivityIndicator size="large" />
			) : (
				<BottomSheet ref={sheetRef} snapPoints={snapPoints}>
					<BottomSheetFlatList
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={renderItem}
						numColumns={numColumns}
					/>
				</BottomSheet>
			)}
		</>
	);
};

export default CharacterList;
