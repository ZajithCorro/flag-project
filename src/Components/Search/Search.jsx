import React, { useContext, useState } from 'react';

import { SearchWrapper, Label } from './styles';

import { CountryContext } from '../../context/CountryContext';

export default function Search() {
	const { state, setCountryByName } = useContext(CountryContext);
	const [value, setValue] = useState(state.inputSearch);

	function handleChange(event) {
		const country = event.target.value.trim();
		setValue(country);
		setCountryByName(event.target.value);
	}

	return (
		<SearchWrapper>
			<Label>
				<i className='fas fa-search'></i>
				<input type='text' value={value} onChange={handleChange} />
			</Label>
		</SearchWrapper>
	);
}
