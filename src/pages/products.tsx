import { Container } from '../styles/pages/products.style';
import Navbar from '../components/navbar';

type Props = {
  toggleTheme(): void;
};

const Products: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <Container />
    </>
  );
};

export default Products;
