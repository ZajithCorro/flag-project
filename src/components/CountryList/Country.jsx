import React from 'react';

import { CountryWrapper } from './styles';

export default function Country({ name, flag, capital, population, region, alpha3Code }) {
	return (
		<CountryWrapper to={`country/${alpha3Code}`}>
			<img loading='lazy' src={flag} alt='Flag country' />
			<div>
				<h2>{name}</h2>
				<p>
					<strong>Population: </strong>
					{new Intl.NumberFormat().format(population)}
				</p>
				<p>
					<strong>Capital: </strong>
					{capital}
				</p>
				<p>
					<strong>Region: </strong>
					{region}
				</p>
			</div>
		</CountryWrapper>
	);
}
