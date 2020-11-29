import styled from 'styled-components';

export const Container = styled.section`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 20px;
`;
