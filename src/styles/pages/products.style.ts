import styled from 'styled-components';

export const ProductsPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 20px;

  width: 80%;

  margin: 20px;
`;
