import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { CountryContext } from '../Context/CountryContext';

import CountryDescription from '../Components/CountryDescription';
import Wrapper from '../Components/Wrapper';

const Back = styled.button`
  background-color: var(--secondary);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 0.7em 2.2em;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: var(--primary);

  i {
    margin-right: 5px;
  }
`;

export default function Country() {
  const { id } = useParams();
  const history = useHistory();
  const { state } = useContext(CountryContext);

  const contextCountry = state.countryList.find(
    (item) => item.alpha3Code === id
  );

  const [country, setCountry] = useState(contextCountry);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchCountry() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${id}`
      );
      const data = await response.json();
      setCountry(data);
    }

    if (contextCountry) {
      setCountry(contextCountry);
    } else {
      fetchCountry();
    }
  }, [id]);

  return (
    <Wrapper>
      <Back onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Back
      </Back>
      <CountryDescription {...country} />
    </Wrapper>
  );
}
