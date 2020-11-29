import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Header,
  Logo,
  LogoContainer,
  Slider,
  Switch,
  SwitchContainer
} from '../styles/components/navbar.style';

const Navbar: React.FC<{ toggleTheme(): void }> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Header>
      <LogoContainer href="#">
        <Logo src="products/carrot.png" alt="logo" />
        Venda do Seu Zé
      </LogoContainer>
      <SwitchContainer onClick={toggleTheme}>
        <Slider active={title === 'light'} />
        <Switch />
      </SwitchContainer>
    </Header>
  );
};

export default Navbar;
