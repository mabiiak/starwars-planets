import styled from 'styled-components';

const TableStyled = styled.table`
  display: flexbox;
  border: solid 0.5px white;
  flex-wrap: wrap;
  margin-top: 25px;
  
  th, td {
    align-content: center;
    background-image: url('https://img.freepik.com/fotos-gratis/estrelas-e-galaxia-espaco-ceu-noite-universo-preto-fundo-estrelado-de-starfield-brilhante_146539-2168.jpg?size=626&ext=jpg');
    background-size: cover;
    color: white;
    padding: 10px
  };

  th {
    font-size: 20px;
    font-family: 'Staatliches', cursive;
  }

  th, td {
    border: solid 0.5px white;
  }
`;

export default TableStyled;
