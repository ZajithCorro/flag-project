import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CountryProvider } from './Context/CountryContext';
import Root from './Root';
import Header from './Components/Header';
import './App.css';

export default function App() {
	const [darkMode, setDarkMode] = useState(false);
	const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

	useEffect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		mq.addListener(() => setDarkMode(mq.matches));
		setDarkMode(mq.matches);
		return () => {
			mq.removeListener();
		};
	}, []);

	return (
		<main className={mainClass}>
			<CountryProvider>
				<Router>
					<Header setDarkMode={setDarkMode} darkMode={darkMode} />
					<Root />
				</Router>
			</CountryProvider>
		</main>
	);
}
