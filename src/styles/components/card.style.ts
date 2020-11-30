import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 15px 15px 0px 15px;
  border-radius: 5px;

  background-color: ${props => props.theme.colors.text};

  text-align: center;
`;

export const ProductName = styled.h1`
  width: 100%;

  color: ${props => props.theme.colors.alt.text};

  text-align: center;
  font-size: 1.5rem;
  font-weight: 550;
`;

export const ProductPrice = styled.h2`
  width: 100%;

  padding: 5px;

  color: ${props => props.theme.colors.primary};

  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Button = styled.button`
  height: 2rem;
  width: 10rem;

  border: none;
  border-radius: 10px 10px 0px 0px;

  background: ${props => props.theme.colors.background};

  font-size: 1.2rem;
  font-weight: 500;
`;

export const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  &:visited {
    color: ${props => props.theme.colors.primary};
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const Image = styled.img`
  height: 150px;
  width: 150px;
`;
