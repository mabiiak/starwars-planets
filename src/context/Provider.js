import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const allState = {
    planets,
    setPlanets,
    filterByName: {
      name,
    },
    handleChange,
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
