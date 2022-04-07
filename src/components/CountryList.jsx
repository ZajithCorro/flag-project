import React, { useContext, useEffect } from 'react';
import { CountryContext } from '../context/CountryContext';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Country from './Country';

const CountryListStyled = styled.div`
	display: grid;
	grid-gap: 2.3em 4em;
	grid-auto-flow: columns;
	grid-template-columns: repeat(auto-fill, 270px);
	justify-content: center;
	padding-bottom: 3em;
`;

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
		<Wrapper>
			<CountryListStyled>
				{countryList.map(({ name, flags, capital, population, cioc, region, cca3 }) => (
					<Country
						key={cioc}
						name={name.common}
						flag={flags.svg}
						capital={capital}
						population={population}
						region={region}
						alpha3Code={cca3}
					/>
				))}
			</CountryListStyled>
		</Wrapper>
	);
}
