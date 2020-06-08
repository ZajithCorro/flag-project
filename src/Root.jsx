import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Country from './Pages/Country';

export default function Root() {
	return (
		<Switch>
			<Route path='/country/:id' component={Country} />
			<Route path='/' component={Home} />
		</Switch>
	);
}
