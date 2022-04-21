import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BorderCountryWrapper, Country } from './styles';

export default function BorderCountries({ countries }) {
	const navigate = useNavigate();

	function goTo(countryCode) {
		navigate(`/country/${countryCode}`);
	}

	return (
		<BorderCountryWrapper>
			<section>
				<div>
					<strong>Border Countries:</strong>
				</div>
				<div className='list-countries'>
					{countries.map((country) => (
						<Country key={country} to={`/country/${country}`}>
							{country}
						</Country>
					))}
				</div>
			</section>
		</BorderCountryWrapper>
	);
}
