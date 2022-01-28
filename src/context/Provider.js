import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const handleFilter = ({ target }) => {
    const { name: nome, value } = target;
    if (nome === 'column') setColumn(value);
    if (nome === 'numero') setValue(value);
    if (nome === 'comparison') setComparison(value);
  };

  const allState = {
    planets,
    setPlanets,
    filterByName: {
      name,
    },
    handleChange,
    filterByNumericValues: [
      {
        column,
        comparison,
        value,
      },
    ],
    setColumn,
    setValue,
    setComparison,
    handleFilter,
  };

  return (
    <Context.Provider value={ allState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
