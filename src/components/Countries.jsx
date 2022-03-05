import React from 'react';
import Country from './Country';

export default function Countries({
  children: countries = [],
  onCountryClick = null,
  visitedCountries = [],
}) {
  return (
    <div className="border p-2">
      <h2 className="text-center font-semibold">{countries.length} país(es)</h2>
      <h3 className="text-center font-semibold text-sm">
        {visitedCountries.length} paí(es) visitado(s)
      </h3>
      {countries.map(country => {
        const isVisited = visitedCountries.indexOf(country.id) !== -1;
        return (
          <Country
            isVisited={isVisited}
            key={country.id}
            onCountryClick={onCountryClick}
          >
            {country}
          </Country>
        );
      })}
    </div>
  );
}
