import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
	const navigation = useNavigation();

	return (
		<View className="flex-1 bg-orange-400">
			<DrawerContentScrollView>
				<Image
					source={require('../../../assets/dragonballLogo.png')}
					style={{ resizeMode: 'contain' }}
					className="mx-auto w-44 h-44"
				/>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<Pressable
				className="flex-row items-center justify-end p-5 border-t"
				onPress={() => navigation.goBack()}
			>
				<Text className="mr-2 text-lg font-bold">Exit</Text>
				<Ionicons name="ios-exit-outline" size={30} color="black" />
			</Pressable>
		</View>
	);
};

export default CustomDrawer;
