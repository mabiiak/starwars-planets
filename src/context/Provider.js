import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

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
    <MyContext.Provider value={ allState }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;
