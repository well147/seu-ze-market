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

export const Alert = styled.div<{ active: boolean }>`
  display: none;

  ${props =>
    props.active &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      height: 3rem;
      width: 100%;

      padding: 10px 15px;

      background: #cf5c36;
      color: white;

      font-size: 1.2rem;
    `}
`;

export const CloseButton = styled.i`
  cursor: pointer;
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

  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.background};

  font-size: 1.2rem;
  font-weight: 450;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 10%;
`;
