import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const BorderCountriesStyled = styled.div`
  text-align: center;
  margin-top: 1.5em;

  .list-countries {
    margin-top: 1em;
  }
  .country {
    cursor: pointer;
    padding: 0.5em 2em;
    margin: 0 15px 15px 0;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background: var(--secondary);
    display: inline-flex;
  }

  @media screen and (min-width: 900px) {
    text-align: left;
  }
`;

export default function BorderCountries({ countries }) {
  const history = useHistory();

  function goTo(countryCode) {
    history.push(`/country/${countryCode}`);
  }

  return (
    <BorderCountriesStyled>
      <section>
        <div>
          <strong>Border Countries:</strong>
        </div>
        <div className='list-countries'>
          {countries.map((country) => (
            <span
              className='country'
              key={country}
              onClick={() => goTo(country)}
            >
              {country}
            </span>
          ))}
        </div>
      </section>
    </BorderCountriesStyled>
  );
}
