import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CountryStyled = styled.article`
	cursor: pointer;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
	background-color: var(--secondary);
	transition: all 0.3s ease;

	&:hover {
		transform: translatey(-0.2rem);
	}

	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
		vertical-align: top;
	}
`;

const Details = styled.div`
	padding: 1.5em;

	h2 {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 18px;
		font-weight: 700;
	}

	p {
		font-size: 0.9em;
		margin-bottom: 0.5rem;
	}
`;

export default function Country({ name, flag, capital, population, region, alpha3Code }) {
	const navigate = useNavigate();

	function goToCountry() {
		navigate(`/country/${alpha3Code}`);
	}

	return (
		<CountryStyled onClick={goToCountry}>
			<img loading='lazy' src={flag} alt='Flag country' />
			<Details>
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
			</Details>
		</CountryStyled>
	);
}
