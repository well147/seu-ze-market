import Link from 'next/link';
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
      <Link href="/products" passHref>
        <LogoContainer>
          <Logo src="product-images/carrot.png" alt="logo" />
          Venda do Seu Zé
        </LogoContainer>
      </Link>
      <SwitchContainer onClick={toggleTheme}>
        <Slider active={title === 'light'} />
        <Switch />
      </SwitchContainer>
    </Header>
  );
};

export default Navbar;
