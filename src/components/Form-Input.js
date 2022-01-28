import React, { useContext } from 'react';
import { Context } from '../context/Provider';
import { Input, FilterLine } from './Style';

export default function FormInput() {
  const {
    handleChange, handleFilter, filterByNumericValues: [{ column, value, comparison }],
  } = useContext(Context);

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
        />
        <button type="button" data-testid="button-filter">
          Filtrar
        </button>
      </FilterLine>
      {console.log({ column, comparison, value })}

    </form>
  );
}
