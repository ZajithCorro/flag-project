import React from 'react';
import styled from 'styled-components';

import BorderCountries from './BorderCountries';

const CountryDescriptionStyled = styled.div`
  margin-top: 3em;
  padding-bottom: 3em;
  text-align: center;

  img {
    width: 100%;
    margin-bottom: 2em;
  }

  .details {
    h2 {
      margin-bottom: 2em;
    }

    p {
      margin-bottom: 1em;
    }
  }

  .grid {
    display: grid;
    gap: 10px 0;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    text-align: left;

    .grid {
      grid-template-columns: 50% 50%;
      gap: 0 10px;
    }
  }
`;

export default function CountryDescription({
  flag,
  name,
  nativeName,
  population,
  area,
  region,
  subregion,
  capital,
  currencies = [],
  borders = [],
  topLevelDomain,
}) {
  return (
    <CountryDescriptionStyled>
      <img src={flag} alt='Bandera' />
      <div className='details'>
        <h2>{name}</h2>
        <div className='grid'>
          <section>
            <p>
              <strong>Native name: </strong>
              {nativeName}
            </p>
            <p>
              <strong>Capital: </strong>
              {capital}
            </p>
            <p>
              <strong>Area: </strong>
              {new Intl.NumberFormat().format(area)} Km<sup>2</sup>
            </p>
            <p>
              <strong>Region: </strong>
              {region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {subregion}
            </p>
          </section>
          <section>
            <p>
              <strong>Population: </strong>
              {new Intl.NumberFormat().format(population)}
            </p>
            <p>
              <strong>Domain: </strong>
              {topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {currencies.map((item) => (
                <span key={item.name}>
                  {item.name} - {item.symbol}
                </span>
              ))}
            </p>
          </section>
        </div>

        {borders.length > 0 ? <BorderCountries countries={borders} /> : ''}
      </div>
    </CountryDescriptionStyled>
  );
}
