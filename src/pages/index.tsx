import Head from 'next/head';
import LoginForm from '../components/login-form';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Venda do Zé | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
