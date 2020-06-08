import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CountryProvider } from './Context/CountryContext';
import Root from './Root';

import './App.css';

export default function App() {
	return (
		<main>
			<CountryProvider>
				<Router>
					<Root />
				</Router>
			</CountryProvider>
		</main>
	);
}
