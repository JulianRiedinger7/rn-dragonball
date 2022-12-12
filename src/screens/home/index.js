import React from 'react';
import { CharacterList, Featured, Header } from '../../components';

const Home = ({ navigation }) => {
	return (
		<>
			<Header />
			<Featured />
			<CharacterList />
		</>
	);
};

export default Home;
