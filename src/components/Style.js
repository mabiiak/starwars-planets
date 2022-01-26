import styled from 'styled-components';

export const TableStyled = styled.table`
  display: flexbox;
  flex-wrap: wrap;
  margin-top: 25px;
  border-spacing: 0;

  th, td {
    align-content: center;
    background-color: #090014;
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
  text-align: center;
  color: white;
  font-family: 'Staatliches', cursive;
`;

export const Input = styled.input`
  border: solid white 1px;
  background-color: black;
  color: white;
  height: 30px;
  margin-left: 43%;
  text-align: center;
`;
