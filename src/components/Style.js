import styled from 'styled-components';

export const TableStyled = styled.table`
  display: flexbox;
  flex-wrap: wrap;
  margin-top: 25px;
  border-spacing: 0;

  th, td {
    align-content: center;
    // background-color: #090014;
    color: white;
    padding: 10px
  };

  th {
    font-size: 20px;
    font-family: 'Staatliches', cursive;
  }

  td, th {
    border-bottom: solid 0.5px white;
  }
`;

export const Title = styled.div`
  color: white;
  font-family: 'Staatliches', cursive;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 100px;
  text-align: center;
`;

export const Input = styled.input`
  border: solid white 1px;
  color: black;
  height: 30px;
  margin-left: 17%;
  margin-bottom: 10px;
  text-align: center;
  width: 800px;
`;

export const FilterLine = styled.div`
  display: flexbox;
  margin-left: 17%;
  margin-bottom: 40px;
  
  select, option, input, button {
    border: solid white 1px;
    background-color: black;
    color: white;
    height: 30px;
    text-align: center;
    width: 200px;
  };

  input {
    height: 25px;
    padding-top: 2px;
  }

  button {
    background-color: white;
    color: black;
    padding-top: 2px;
  }
`;
