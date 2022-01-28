import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import { Input } from './Style';

export default function FormInput() {
  const { handleChange } = useContext(MyContext);

  return (
    <form>
      <Input
        data-testid="name-filter"
        placeholder="Planeta"
        onChange={ handleChange }
      />
    </form>
  );
}
