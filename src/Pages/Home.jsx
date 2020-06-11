import React from 'react';
import CountryList from '../Components/CountryList';
import Filters from '../Components/Filters';

export default function Home() {
	return (
		<>
			<Filters />
			<CountryList />
		</>
	);
}
