import Head from 'next/head';
import LoginForm from '../components/login-form';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Venda do Zé | Home</title>
      </Head>
      <main>
        <LoginForm />
      </main>
    </>
  );
};

export default Home;
