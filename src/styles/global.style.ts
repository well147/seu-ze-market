import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Poppins, sans-serif;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  height: 3rem;
  width: 10rem;

  border-radius: 5px;
  border: none;
  border: solid 3px ${props => props.theme.colors.secundary};

  background: transparent;
  color: ${props => props.theme.colors.secundary};

  font-weight: 500;
  font-size: 1.1rem;

  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      border: none;

      background: ${props => props.theme.colors.secundary};
      color: ${props => props.theme.colors.background};
    `}
`;

export default GlobalStyles;
