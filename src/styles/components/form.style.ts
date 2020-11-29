import styled, { css } from 'styled-components';

interface ButtonProps {
  theme: any;
  primary?: boolean;
}

export const InputContainer = styled.div`
  margin: 10%;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  font-weight: 450;
  width: 100%;
  height: 2rem;
`;

export const ButtonsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 1.1rem;
  height: 3rem;
  border-radius: 5px;
  width: 14rem;
  border: none;
  border: solid 3px #8caaf8;
  background-color: transparent;
  color: #8caaf8;

  ${(props: ButtonProps) =>
    props.primary &&
    css`
      border: none;
      background-color: #8caaf8;
      color: #33312e;
    `}
`;
