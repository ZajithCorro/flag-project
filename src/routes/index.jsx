import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Country from '../Pages/Country';
import Header from '../Components/Header';

const Routes = ({ setDarkMode, darkMode }) => (
	<BrowserRouter>
		<Header setDarkMode={setDarkMode} darkMode={darkMode} />
		<Switch>
			<Route path='/country/:id' element={<Country />} />
			<Route path='/' element={<Home />} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
