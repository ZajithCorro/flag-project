import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CountryDetails from '../pages/CountryDetails';
import Header from '../components/Header';

const Routes = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path='/country/:id' element={<CountryDetails />} />
			<Route path='/' element={<Home />} />
			<Route path='*' element={<Home />} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
