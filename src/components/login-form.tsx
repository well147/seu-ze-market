import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  ButtonsContainer,
  Form,
  Input,
  InputsContainer,
  Label,
  LoginFormPage
} from '../styles/components/form.style';

import { Button } from '../styles/global.style';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username == 'username' && password == '123') {
      router.push('/products');
    }
  };

  return (
    <LoginFormPage>
      <Form onSubmit={handleSubmit}>
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
          <Button>Limpar</Button>
        </ButtonsContainer>
      </Form>
    </LoginFormPage>
  );
};

export default LoginForm;
