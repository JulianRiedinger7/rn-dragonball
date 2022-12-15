// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDfV6LKR5aPD_NPj6GhV3T1JWngrByEhlU',
	authDomain: 'rn-dragonball.firebaseapp.com',
	projectId: 'rn-dragonball',
	storageBucket: 'rn-dragonball.appspot.com',
	messagingSenderId: '144067783097',
	appId: '1:144067783097:web:c3e18d5b117bb9a488ae68',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
