import { DetailContainer } from '../../styles/pages/products.style';

import Detail from '../../components/details';
import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import products, { Product } from '../../fixtures/products';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

type Props = {
  product: Product | undefined;
};

type StaticProps = {
  product: Product | undefined;
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
      <DetailContainer>
        <Detail />
      </DetailContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map(p => {
    return { params: { id: p.id.toString() } };
  });

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<StaticProps, Params> = async ({
  params
}): Promise<GetStaticPropsResult<StaticProps>> => {
  const { id } = params as Params;
  const product = products.find(p => p.id.toString() === id);
  ('');
  return {
    props: {
      product: product
    }
  };
};

export default Overview;
