import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CountryContext } from '../context/CountryContext';

import CountryDescription from '../components/CountryDescription';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';

export default function CountryDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { state } = useContext(CountryContext);

	const contextCountry = state.countryList.find((item) => item.alpha3Code === id);

	const [country, setCountry] = useState(contextCountry);

	useEffect(() => {
		window.scrollTo(0, 0);

		async function fetchCountry() {
			const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
			const data = await response.json();
			setCountry(data);
		}

		if (contextCountry) {
			setCountry(contextCountry);
		} else {
			fetchCountry();
		}
	}, [id]);

	return (
		<Wrapper>
			<Button onClick={() => navigate('/')}>
				<i className='fas fa-long-arrow-alt-left'></i> Back
			</Button>
			<CountryDescription {...country} />
		</Wrapper>
	);
}
