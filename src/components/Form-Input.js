import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { Input, FilterLine } from './Style';

export default function FormInput() {
  const { handleChange } = useContext(MyContext);

  return (
    <form>
      <Input
        data-testid="name-filter"
        placeholder="Planeta"
        onChange={ handleChange }
      />

      <FilterLine>
        <select data-testid="column-filter">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>

        <select data-testid="comparison-filter">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input type="number" placeholder="valor" data-testid="value-filter" />
        <button type="button" data-testid="button-filter">
          Filtrar
        </button>
      </FilterLine>
    </form>
  );
}
