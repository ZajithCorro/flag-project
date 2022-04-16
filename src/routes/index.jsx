import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CountryDetails from '../pages/CountryDetails';

const Routes = () => (
	<Switch>
		<Route path='/country/:id' element={<CountryDetails />} />
		<Route path='/' element={<Home />} />
		<Route path='*' element={<Home />} />
	</Switch>
);

export default Routes;
