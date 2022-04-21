import React from 'react';

import BorderCountries from '../BorderCountries';
import { CountryDescriptionWrapper } from './styles';

export default function CountryDescription({
	name = '',
	flags = '',
	capital = '',
	area,
	region,
	subregion,
	population,
	borders = [],
}) {
	return (
		<CountryDescriptionWrapper>
			<img src={flags.svg} alt='Flag of the country' />
			<div className='details'>
				<h1>{name.common}</h1>
				<div className='grid'>
					<section>
						<p>
							<strong>Capital: </strong>
							{capital}
						</p>
						<p>
							<strong>Area: </strong>
							{new Intl.NumberFormat().format(area)} Km<sup>2</sup>
						</p>
						<p>
							<strong>Region: </strong>
							{region}
						</p>
						<p>
							<strong>Sub Region: </strong>
							{subregion}
						</p>
					</section>
					<section>
						<p>
							<strong>Population: </strong>
							{new Intl.NumberFormat().format(population)}
						</p>
					</section>
				</div>

				{borders.length > 0 ? <BorderCountries countries={borders} /> : ''}
			</div>
		</CountryDescriptionWrapper>
	);
}
