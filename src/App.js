import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Provider from './context/Provider';
import FormInput from './components/Form-Input';

function App() {
  return (
    <Provider>
      <Header />
      <FormInput />
      <Table />
    </Provider>
  );
}

export default App;
