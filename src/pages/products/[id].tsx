import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';

import { ParsedUrlQuery } from 'querystring';

import Details from '../../components/details';
import { ProductDetailsPage } from '../../styles/pages/product-details.style';

import products, { Product } from '../../fixtures/products';

type Props = {
  product: Product;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const Overview: React.FC<Props> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Venda do Zé | {product?.name}</title>
      </Head>
      <ProductDetailsPage>
        <Details
          name={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      </ProductDetailsPage>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(p => {
    return { params: { id: p.id.toString() } };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  const { id } = params as Params;
  const product = products.find(p => p.id.toString() === id);
  ('');
  return {
    props: {
      product: product as Product
    }
  };
};

export default Overview;
