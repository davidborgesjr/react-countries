import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Countries from '../components/Countries';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';

export default function ReactCountriesPages() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(
        visitedCountryId => visitedCountryId !== countryId
      );
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.toLowerCase();

  const filteredCountries =
    countryFilterLowerCase.trim().length > 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  return (
    <div>
      <Header>react-contries</Header>

      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Informe o nome do país, pelo menos três caracteres"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        ></TextInput>
        <Countries
          visitedCountries={visitedCountries}
          onCountryClick={toggleVisitedCountry}
        >
          {filteredCountries}
        </Countries>
      </Main>
    </div>
  );
}
