import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0px 10px;

  height: 60px;
  background: ${props => props.theme.colors.primary};
`;

export const Logo = styled.img`
  height: 65%;
`;

export const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;

  font-weight: 600;
  font-size: 1.2rem;

  text-decoration: none;
  color: ${props => props.theme.colors.text};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Switch = styled.div`
  height: 15px;
  width: 50px;

  border-radius: 10px;

  background: ${props => props.theme.colors.background};
`;

export const Slider = styled.span<{ active?: boolean }>`
  position: relative;

  height: 25px;
  width: 25px;

  background: ${props => props.theme.colors.text};
  border-radius: 50%;

  transform: translate(90%, -20%);

  transition: transform 200ms;

  ${props =>
    props.active &&
    css`
      transform: translate(210%, -20%);
    `}
`;
