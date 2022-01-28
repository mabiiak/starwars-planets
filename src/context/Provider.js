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
    const { value: valor } = target;
    setName(valor);
  };

  const handleFilter = ({ target }) => {
    const { name: nome, value: valor } = target;
    if (nome === 'column') setColumn(valor);
    if (nome === 'numero') setValue(valor);
    if (nome === 'comparison') setComparison(valor);
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
