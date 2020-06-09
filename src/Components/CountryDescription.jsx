import React from 'react';
import styled from 'styled-components';

import CountryBorder from './CountryBorder';

const Container = styled.div`
	margin-top: 3em;
	padding-bottom: 3em;

	img {
		width: 100%;
		margin-bottom: 2em;
	}

	@media screen and (min-width: 900px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 120px;
		margin-top: 5em;
	}
`;

const Details = styled.div`
	text-align: center;

	h2 {
		margin-bottom: 2em;
	}

	p {
		margin-bottom: 1em;
	}

	@media screen and (min-width: 900px) {
		text-align: left;
	}
`;

const Language = styled.span`
	margin-right: 5px;

	&::after {
		content: ',';
	}

	&:last-child {
		&::after {
			content: '';
		}
	}
`;

const BorderCountries = styled.div`
	text-align: center;
	margin-top: 1.5em;

	.list-countries {
		margin-top: 1em;
	}

	@media screen and (min-width: 900px) {
		text-align: left;
	}
`;

export default function CountryDescription({
	flag,
	name,
	nativeName,
	population,
	area,
	region,
	subregion,
	capital,
	currencies = [],
	languages = [],
	borders = [],
	alpha2Code,
}) {
	return (
		<Container>
			<img src={flag} alt='Bandera' />
			<Details>
				<h2>{name}</h2>
				<div>
					<section>
						<p>
							<strong>Native name: </strong>
							{nativeName}
						</p>
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
						<p>
							<strong>Population: </strong>
							{new Intl.NumberFormat().format(population)}
						</p>
					</section>
					<section>
						<p>
							<strong>Currencies: </strong>
							{currencies.map((item) => (
								<span>
									{item.name} - {item.symbol}
								</span>
							))}
						</p>
						<p>
							<strong>Languages: </strong>
							{languages.map((language) => (
								<Language>{language.name}</Language>
							))}
						</p>
					</section>
				</div>

				{borders.length > 0 ? (
					<BorderCountries>
						<section>
							<div>
								<strong>Border Countries:</strong>
							</div>
							<div className='list-countries'>
								{borders.map((country) => (
									<CountryBorder name={country} />
								))}
							</div>
						</section>
					</BorderCountries>
				) : (
					''
				)}
			</Details>
		</Container>
	);
}
