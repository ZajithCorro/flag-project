import React, { useState, createContext } from 'react';

const CountryContext = createContext();
const { Provider } = CountryContext;

const initialState = {
	countryList: [],
};

function CountryProvider({ children }) {
	const [state, setState] = useState(initialState);

	function setCountryList(countryList) {
		setState({ ...state, countryList });
	}

	return <Provider value={{ state, setCountryList }}>{children}</Provider>;
}

export { CountryContext, CountryProvider };
