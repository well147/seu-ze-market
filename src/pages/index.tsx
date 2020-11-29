import Head from 'next/head';
import Form from '../components/form';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Venda do Zé | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
      </main>
    </div>
  );
};

export default Home;
