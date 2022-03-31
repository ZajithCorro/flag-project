import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Country from '../pages/Country';
import Header from '../components/Header';

const Routes = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path='/country/:id' element={<Country />} />
			<Route path='/' element={<Home />} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
