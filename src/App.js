import React, { useContext } from 'react';

import { CountryProvider } from './context/CountryContext';
import { ThemeContext } from './context/ThemeContext';

import Routes from './routes';

import './App.css';

export default function App() {
	return (
		<main>
			<CountryProvider>
				<Routes />
			</CountryProvider>
		</main>
	);
}
