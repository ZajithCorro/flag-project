import React, { useContext, useState, useEffect } from 'react';

import useDebounce from '../../hooks/useDebounce';

import { SearchWrapper, Label } from './styles';

import { CountryContext } from '../../context/CountryContext';

export default function Search() {
	const { setCountryByName } = useContext(CountryContext);
	const [value, setValue] = useState('');
	const debounceValue = useDebounce(value, 300);

	function handleChange(event) {
		const country = event.target.value.trim();
		setValue(country);
	}

	useEffect(() => {
		setCountryByName(debounceValue);
	}, [debounceValue]);

	return (
		<SearchWrapper>
			<Label>
				<i className='fas fa-search'></i>
				<input type='search' value={value} onChange={handleChange} />
			</Label>
		</SearchWrapper>
	);
}
