import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Country from './Pages/Country';

export default function Root() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/country/:id' element={<Country />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
