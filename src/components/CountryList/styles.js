import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CountryWrapper = styled(Link)`
	cursor: pointer;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
	background-color: var(--secondary);
	transition: all 0.3s ease;
	text-decoration: none;
	color: #ffff;

	&:hover {
		transform: translatey(-0.2rem);
	}

	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
		vertical-align: top;
	}

	& > div {
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
	}
`;

export const CountryListGrid = styled.div`
	display: grid;
	grid-gap: 2.3em 4em;
	grid-auto-flow: columns;
	grid-template-columns: repeat(auto-fill, 270px);
	justify-content: center;
	padding-bottom: 3em;
`;
