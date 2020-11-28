import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 60px;
  background: ${props => props.theme.colors.primary};
`;

export const Logo = styled.img`
  height: 80%;
`;

export const LogoContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;

  font-weight: 600;
  font-size: 1.5rem;
`;

export const Switch = styled.div``;
