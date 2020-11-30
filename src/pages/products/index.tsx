import { Container, ProductsPage } from '../../styles/pages/products.style';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import products from '../../fixtures/products';
import Head from 'next/head';

type Props = {
  toggleTheme(): void;
};

const Products: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Venda do Zé | Produtos</title>
      </Head>
      <ProductsPage>
        <Navbar toggleTheme={toggleTheme} />
        <Container>
          {products.map(product => {
            const { id, image, price, name } = product;
            return (
              <Card key={id} id={id} image={image} price={price} name={name} />
            );
          })}
        </Container>
      </ProductsPage>
    </>
  );
};

export default Products;
