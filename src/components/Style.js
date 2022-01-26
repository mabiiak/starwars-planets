import styled from 'styled-components';

const TableStyled = styled.table`
  display: flexbox;
  flex-wrap: wrap;
  
  th, td {
    align-content: center;
    background-image: url('https://img.freepik.com/fotos-gratis/estrelas-e-galaxia-espaco-ceu-noite-universo-preto-fundo-estrelado-de-starfield-brilhante_146539-2168.jpg?size=626&ext=jpg');
    color: white;
    padding: 10px
  };

  th {
    font-size: 20px; 
  }
`;

export default TableStyled;
