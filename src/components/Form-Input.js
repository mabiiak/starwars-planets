import React, { useContext } from 'react';
import { Context } from '../context/Provider';
import { Input, FilterLine } from './Style';

export default function FormInput() {
  const { handleChange, handleFilter, planets, setPlanets,
    filterByNumericValues: [{ column, value, comparison }] } = useContext(Context);

  const onClickFilter = () => {
    if (comparison === 'maior que') {
      setPlanets(planets.filter((planet) => planet[column] > +value));
    }
    if (comparison === 'menor que') {
      setPlanets(planets.filter((planet) => planet[column] < +value));
    }
    if (comparison === 'igual a') {
      setPlanets(planets.filter((planet) => planet[column] === value));
    }
  };

  return (
    <form>
      <Input
        data-testid="name-filter"
        placeholder="Planeta"
        onChange={ handleChange }
      />

      <FilterLine>
        <select name="column" data-testid="column-filter" onChange={ handleFilter }>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ handleFilter }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input
          type="number"
          placeholder="valor"
          name="numero"
          data-testid="value-filter"
          onChange={ handleFilter }
          value={ value }
        />
        <button type="button" data-testid="button-filter" onClick={ onClickFilter }>
          Filtrar
        </button>
      </FilterLine>
    </form>
  );
}
