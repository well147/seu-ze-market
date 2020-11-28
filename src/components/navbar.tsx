import {
  Header,
  Logo,
  LogoContainer,
  Switch
} from '../styles/components/navbar.style';

const Navbar: React.FC = () => {
  return (
    <Header>
      <LogoContainer>
        <Logo src="products/carrot.png" alt="logo" />
        Venda do Seu Zé
      </LogoContainer>
      <Switch />
    </Header>
  );
};

export default Navbar;
