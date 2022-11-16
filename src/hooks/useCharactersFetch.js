import { useEffect, useState } from 'react';

export const useCharactersFetch = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/andrewbaisden/dragonball-character-database/master/client/db.json'
		)
			.then((res) => res.json())
			.then((res) => setData(res.characters))
			.catch((err) => console.warn(err))
			.finally(() => setLoading(false));
	}, []);

	return { data, loading };
};
