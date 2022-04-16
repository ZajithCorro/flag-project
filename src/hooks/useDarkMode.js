import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		mq.addEventListener('change', () => setDarkMode(mq.matches));
		setDarkMode(mq.matches);
		return () => {
			mq.removeEventListener();
		};
	}, []);

	const switchDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return [darkMode, switchDarkMode];
};
