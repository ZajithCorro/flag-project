import React from 'react';
import CountryList from '../components/CountryList';
import Filters from '../components/Filters';

export default function Home() {
	return (
		<>
			<Filters />
			<CountryList />
		</>
	);
}
