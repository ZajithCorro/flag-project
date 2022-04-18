import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CountryContext } from '../context/CountryContext';

import CountryDescription from '../components/CountryDescription';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

export default function CountryDetails() {
	const { code } = useParams();
	const navigate = useNavigate();
	const { state } = useContext(CountryContext);

	const contextCountry = state.countryList.find((item) => item.cca3 === code);

	const [country, setCountry] = useState(contextCountry);

	useEffect(() => {
		window.scrollTo(0, 0);

		async function fetchCountry() {
			const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
			const data = await response.json();
			setCountry(data[0]);
		}

		if (contextCountry) {
			setCountry(contextCountry);
		} else {
			fetchCountry();
		}
	}, [code]);

	return (
		<Wrapper>
			<Button onClick={() => navigate('/')}>
				<i className='fas fa-long-arrow-alt-left'></i> Back
			</Button>
			<CountryDescription {...country} />
		</Wrapper>
	);
}
