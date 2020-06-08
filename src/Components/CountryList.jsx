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
	padding: 3em 0;
`;

export default function CountryList() {
	const { state, setCountryList } = useContext(CountryContext);

	const { countryList } = state;

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((data) => {
				setCountryList(data);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<Wrapper>
			<CountryListStyled>
				{countryList.map(({ name, flag, capital, population }) => {
					return (
						<Country
							name={name}
							flag={flag}
							capital={capital}
							population={population}
						/>
					);
				})}
			</CountryListStyled>
		</Wrapper>
	);
}
