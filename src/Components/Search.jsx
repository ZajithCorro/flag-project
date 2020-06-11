import React, { useContext } from 'react';
import styled from 'styled-components';
import { CountryContext } from '../Context/CountryContext';
import { useState } from 'react';

const SearchStyled = styled.div`
	display: flex;
	position: relative;
	width: 90%;
	margin: 0 auto;
	margin-bottom: 1.5em;

	.close {
		position: absolute;
		right: 1em;
		top: 1em;
		border-radius: 50%;
		border: none;
		box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
	}

	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

const InputStyled = styled.label`
	display: inline-flex;
	background: var(--secondary);
	align-items: center;
	box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
	padding: 0 2rem;
	border-radius: 5px;
	flex: 1;
	i {
		margin-right: 1em;
		color: #c4c4c4;
	}
	input {
		flex: 1;
		border: none;
		height: 48px;
		line-height: 48px;
		font-size: 0.7em;
		outline: 0;
		color: var(--primary);
		background: var(--secondary);
		&::-webkit-input-placeholder {
			color: #c4c4c4;
		}
	}
`;

export default function Search() {
	const { state, setCountryByName } = useContext(CountryContext);
	const [value, setValue] = useState(state.inputSearch);

	function handleChange(event) {
		const country = event.target.value.trim();
		setValue(country);
		setCountryByName(event.target.value);
	}

	return (
		<SearchStyled>
			<InputStyled>
				<i className='fas fa-search'></i>
				<input type='text' value={value} onChange={handleChange} />
			</InputStyled>
		</SearchStyled>
	);
}
