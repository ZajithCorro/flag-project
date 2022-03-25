import { useEffect, useState } from 'react';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);
	const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

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

	return [mainClass, switchDarkMode];
};
