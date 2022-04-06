import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BorderCountryWrapper } from './styles';

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
						<span className='country' key={country} onClick={() => goTo(country)}>
							{country}
						</span>
					))}
				</div>
			</section>
		</BorderCountryWrapper>
	);
}
