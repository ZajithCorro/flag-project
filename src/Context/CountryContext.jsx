import React, { useState, createContext } from 'react';

const CountryContext = createContext();
const { Provider } = CountryContext;

const initialState = {
	countryList: [],
	countryListByName: [],
	inputSearch: '',
};

function CountryProvider({ children }) {
	const [state, setState] = useState(initialState);

	function setCountryByName(countryName) {
		const { countryList } = state;

		const countryListByName = countryList.filter((country) =>
			country.name.toLowerCase().includes(countryName.toLowerCase())
		);

		setState({ ...state, countryListByName, inputSearch: countryName });
	}

	function setCountryList(countryList) {
		setState({ ...state, countryList });
	}

	return (
		<Provider value={{ state, setCountryList, setCountryByName }}>
			{children}
		</Provider>
	);
}

export { CountryContext, CountryProvider };
