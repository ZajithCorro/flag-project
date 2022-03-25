import React, { useState, useEffect } from 'react';

import { CountryProvider } from './context/CountryContext';
import { ThemeContext } from './context/ThemeContext';

import Routes from './routes';

import './App.css';

export default function App() {
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

	return (
		<main className={mainClass}>
			<CountryProvider>
				<Routes setDarkMode={setDarkMode} darkMode={darkMode} />
			</CountryProvider>
		</main>
	);
}
