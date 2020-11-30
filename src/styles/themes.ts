import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
  title: 'dark',

  colors: {
    primary: '#6B8DC7',
    secundary: '#8CAAF8',

    background: '#33312E',
    text: '#EDEDFD',

    alt: {
      background: 'white',
      text: '#33312E'
    }
  }
};

export const light: DefaultTheme = {
  title: 'light',

  colors: {
    primary: '#3E63A3',
    secundary: '#3E72F4',

    background: '#EDEDFD',
    text: '#33312E',

    alt: {
      background: '#33312E',
      text: 'white'
    }
  }
};
