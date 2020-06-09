import React from 'react';
import styled from 'styled-components';

const Country = styled.span`
	padding: 0.5em 2em;
	margin: 0 15px 15px 0;
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	background: var(--white);
	display: inline-flex;
`;

export default function CountryBorder({ name }) {
	return <Country>{name}</Country>;
}
