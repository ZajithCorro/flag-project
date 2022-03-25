import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Country from '../Pages/Country';
import Header from '../Components/Header';

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
