import React, { useContext, useEffect } from 'react';
import { CountryContext } from '../Context/CountryContext';
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
		state.countryListByName.length > 0
			? state.countryListByName
			: state.countryList;

	useEffect(() => {
		const fetchCountries = () => {
			fetch('https://restcountries.eu/rest/v2/all')
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
				{countryList.map(
					({
						name,
						flag,
						capital,
						population,
						numericCode,
						alpha3Code,
						region,
					}) => {
						return (
							<Country
								key={numericCode}
								name={name}
								flag={flag}
								capital={capital}
								population={population}
								region={region}
								alpha3Code={alpha3Code}
							/>
						);
					}
				)}
			</CountryListStyled>
		</Wrapper>
	);
}
