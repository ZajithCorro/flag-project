import React, { useContext, useEffect } from 'react';

import { CountryContext } from '../../context/CountryContext';

import Country from './Country';

import { CountryListGrid } from './styles';

export default function CountryList() {
	const { state, setCountryList } = useContext(CountryContext);

	const countryList =
		state.countryListByName.length > 0 ? state.countryListByName : state.countryList;

	useEffect(() => {
		const fetchCountries = () => {
			fetch('https://restcountries.com/v3.1/all')
				.then((response) => response.json())
				.then((data) => {
					setCountryList(data);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchCountries();
	}, []);

	return (
		<div className='wrapper'>
			<CountryListGrid>
				{countryList.map(({ name, flags, capital, population, region, cca3 }) => (
					<Country
						key={cca3}
						name={name.common}
						flag={flags.svg}
						capital={capital}
						population={population}
						region={region}
						alpha3Code={cca3}
					/>
				))}
			</CountryListGrid>
		</div>
	);
}
