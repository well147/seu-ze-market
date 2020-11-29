import { Container } from '../styles/pages/products.style';
import Navbar from '../components/navbar';
import Card from '../components/card';
import products from '../fixtures/products';

type Props = {
  toggleTheme(): void;
};

const Products: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} />
      <Container>
        {products.map(product => {
          const { image, price, name } = product;
          return (
            <Card key={product.id} image={image} price={price} name={name} />
          );
        })}
      </Container>
    </>
  );
};

export default Products;
