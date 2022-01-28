import React, { useContext, useState } from 'react';
import { Context } from '../context/Provider';
import { Input, FilterLine, LineFilter } from './Style';

export default function FormInput() {
  const { handleChange, handleFilter, planets, setPlanets, listFilter,
    filterByNumericValues: [{ column, value, comparison }] } = useContext(Context);

  const [options, attOptions] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const onClickFilter = () => {
    listFilter.push({ column, value, comparison });

    if (comparison === 'maior que') {
      setPlanets(planets.filter((planet) => planet[column] > +value));
    }
    if (comparison === 'menor que') {
      setPlanets(planets.filter((planet) => planet[column] < +value));
    }
    if (comparison === 'igual a') {
      setPlanets(planets.filter((planet) => planet[column] === value));
    }

    attOptions(options.filter((opt) => opt !== column));
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
          {
            options.map((opt) => <option key={ opt }>{ opt }</option>)
          }

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

      {
        listFilter !== [] && (
          listFilter.map((filter) => (
            <LineFilter key={ filter.column }>
              <p>{ filter.column }</p>
              <p>{ filter.comparison }</p>
              <p>{ filter.value }</p>
              <button type="button">X</button>
            </LineFilter>
          ))
        )
      }
    </form>
  );
}
