import { View, Text, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../constants';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { userSignOut } from '../../store/actions';

const CustomDrawer = (props) => {
	const dispatch = useDispatch();

	const onHandleSignOut = async () => {
		try {
			await signOut(auth);
			dispatch(userSignOut());
		} catch (error) {
			Alert.alert(error.message);
		}
	};

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
				onPress={onHandleSignOut}
			>
				<Text className="mr-2 text-lg font-bold">Exit</Text>
				<Ionicons name="ios-exit-outline" size={30} color="black" />
			</Pressable>
		</View>
	);
};

export default CustomDrawer;
