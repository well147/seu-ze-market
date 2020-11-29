import styled, { css } from 'styled-components';

export const LoginFormPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const Form = styled.form`
  max-width: 600px;
  width: 80%;
  min-width: 400px;

  padding: 30px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Label = styled.label`
  margin: 15px 0 20px;

  color: ${props => props.theme.colors.text};

  font-size: 1.2rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;

  border-radius: 5px;
  border: none;
  padding: 10px;

  background: ${props => props.theme.colors.alt.background};
  color: ${props => props.theme.colors.alt.text};

  font-size: 1.2rem;
  font-weight: 450;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 10%;
`;

export const Button = styled.button<{ primary?: boolean }>`
  height: 3rem;
  width: 10rem;

  border-radius: 5px;
  border: none;
  border: solid 3px #8caaf8;

  background-color: transparent;
  color: #8caaf8;

  font-weight: 500;
  font-size: 1.1rem;

  ${props =>
    props.primary &&
    css`
      border: none;

      background-color: #8caaf8;
      color: #33312e;
    `}
`;
