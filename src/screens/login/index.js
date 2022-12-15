import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { auth } from '../../constants';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/actions';

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true);

	const onHandleSign = async () => {
		if (isLogin) {
			try {
				const userCredentials = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch(setUser(userCredentials));
			} catch (error) {
				Alert.alert(error.message);
			}
		} else {
			try {
				const userCredentials = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch(setUser(userCredentials));
			} catch (error) {
				Alert.alert(error.message);
			}
		}
	};

	return (
		<KeyboardAvoidingView className="flex-1" behavior="height">
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View className="items-center justify-center flex-1">
					<View className="w-4/5 p-10 rounded-lg bg-white/80">
						<Text
							className="self-center text-5xl text-orange-400"
							style={{ fontFamily: 'Bebas-Neue' }}
						>
							{isLogin ? 'Login' : 'Register'}
						</Text>

						<View className="my-3">
							<Text>Email</Text>
							<TextInput
								placeholder="Enter your email"
								keyboardType="email-address"
								autoCapitalize="none"
								autoCorrect={false}
								maxLength={30}
								onChangeText={(text) => setEmail(text)}
								value={email}
								className="border-b border-b-orange-400"
							/>
						</View>

						<View className="my-3">
							<Text>Password</Text>
							<TextInput
								placeholder="Enter your password"
								autoCapitalize="none"
								secureTextEntry
								autoCorrect={false}
								maxLength={30}
								onChangeText={(text) => setPassword(text)}
								value={password}
								className="border-b border-b-orange-400"
							/>
						</View>

						<TouchableOpacity
							className="items-center justify-center p-2 bg-orange-400 rounded-lg"
							onPress={onHandleSign}
						>
							<Text className="text-lg font-semibold text-white">
								{isLogin ? 'Login' : 'Register'}
							</Text>
						</TouchableOpacity>

						<View className="flex-row mt-5 space-x-1">
							<Text>
								{isLogin
									? "Don't have an account?"
									: 'Already have an account?'}
							</Text>
							<TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
								<Text className="font-bold">
									{isLogin ? 'Register' : 'Login'}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Login;
