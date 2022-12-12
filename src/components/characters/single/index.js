import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeActive } from '../../../store/actions';
import images from '../../../constants/images';

const Character = ({ item, handleSnapPress }) => {
	const dispatch = useDispatch();

	const onHandlePress = () => {
		dispatch(changeActive(item));
		handleSnapPress(0);
	};

	return (
		<TouchableOpacity
			className="items-center w-40 m-5 mx-auto rounded-md"
			onPress={onHandlePress}
		>
			<View className="bg-orange-400 rounded-lg ">
				<Image
					source={images[item.id]}
					style={{ resizeMode: 'contain' }}
					className="-translate-y-6 h-44 w-44"
				/>
			</View>
			<Text
				className="mt-1 text-3xl text-black uppercase"
				style={{ fontFamily: 'Bebas-Neue' }}
			>
				{item.name}
			</Text>
		</TouchableOpacity>
	);
};

export default Character;
