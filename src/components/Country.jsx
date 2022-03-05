import React from 'react';
import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossível renderizar o país</div>;
  }

  const { name, capital, region, population, area } = country;

  const demographicDensity = country.population / country.area;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }

  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <ul>
        <li>
          <Item label="Name">{name}</Item>
        </li>
        <li>
          <Item label="Capital">{capital}</Item>
        </li>
        <li>
          <Item label="Region">{region}</Item>
        </li>
        <li>
          <Item label="Population">{population}</Item>
        </li>
        <li>
          <Item>{area}</Item>
        </li>
        <li>{demographicDensity}</li>
      </ul>
    </div>
  );
}
