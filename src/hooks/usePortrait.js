import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const usePortrait = () => {
	const [isPortrait, setIsPortrait] = useState(true);

	const onPortrait = () => {
		const dim = Dimensions.get('screen');
		return dim.height >= dim.width;
	};

	const statePortrait = () => {
		setIsPortrait(onPortrait);
	};

	useEffect(() => {
		const subscription = Dimensions.addEventListener('change', statePortrait);

		return () => {
			subscription.remove();
		};
	});

	return { isPortrait };
};
