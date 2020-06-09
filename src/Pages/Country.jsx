import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CountryContext } from '../Context/CountryContext';

import CountryDescription from '../Components/CountryDescription';
import Wrapper from '../Components/Wrapper';

const Back = styled.button`
	background-color: var(--secondary);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	padding: 0.7em 2.2em;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	color: var(--primary);

	i {
		margin-right: 5px;
	}
`;

export default function Country({ match, history }) {
	const { state } = useContext(CountryContext);

	const contextCountry = state.countryList.find(
		(item) => item.alpha2Code === match.params.id
	);

	const [country, setCountry] = useState(contextCountry);

	useEffect(() => {
		async function fetchCountry() {
			const response = await fetch(
				`https://restcountries.eu/rest/v2/alpha/${match.params.id}`
			);
			const data = await response.json();
			setCountry(data);
		}

		if (!contextCountry) fetchCountry();
	}, [match.params.id, contextCountry]);

	return (
		<Wrapper>
			<Back onClick={() => history.goBack()}>
				<i className='fas fa-long-arrow-alt-left'></i> Back
			</Back>
			<CountryDescription {...country} />
		</Wrapper>
	);
}
