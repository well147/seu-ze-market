import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Alert,
  ButtonsContainer,
  CloseButton,
  Form,
  Input,
  InputsContainer,
  Label,
  LoginFormPage
} from '../styles/components/login-form.style';

import { Button } from '../styles/global.style';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username == 'username' && password == '123') {
      router.push('/products');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleClear = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <LoginFormPage>
      <Form onSubmit={handleSubmit}>
        <Alert active={error.length ? true : false}>
          {error}
          <CloseButton className="fas fa-times" onClick={() => setError('')} />
        </Alert>
        <InputsContainer>
          <Label htmlFor="username">Nome de Usuário</Label>
          <Input
            id="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </InputsContainer>

        <ButtonsContainer>
          <Button primary type="submit">
            Login
          </Button>
          <Button onClick={handleClear}>Limpar</Button>
        </ButtonsContainer>
      </Form>
    </LoginFormPage>
  );
};

export default LoginForm;
