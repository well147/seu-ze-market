import styled from 'styled-components';

export const DetailsContainer = styled.div`
  min-width: 300px;
  width: 30%;
  max-width: 400px;

  background-color: ${props => props.theme.colors.text};
  border-radius: 10px;
  text-align: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const H1 = styled.h1`
  margin: 0.8rem;

  color: ${props => props.theme.colors.background};

  font-size: 1.4rem;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 1rem;

  color: ${props => props.theme.colors.background};

  margin-bottom: 0.4rem;
`;
