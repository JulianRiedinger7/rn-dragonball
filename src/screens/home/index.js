import React from 'react';
import { CharacterList, Featured } from '../../components';

const Home = ({ onHandleInfo }) => {
	return (
		<>
			<Featured onHandleInfo={onHandleInfo} />
			<CharacterList />
		</>
	);
};

export default Home;
