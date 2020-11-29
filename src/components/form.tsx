import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Input,
  ButtonsContainer,
  Label,
  InputContainer
} from '../styles/components/form.style';

const Form: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = () => {
    if (username == 'username' && password == '123') {
      router.push('/products');
    }
  };

  return (
    <div>
      <InputContainer>
        <Label>Username</Label>
        <Input value={username} onChange={handleUsernameChange} />
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </InputContainer>

      <ButtonsContainer>
        <Button primary onClick={handleLogin}>
          Login
        </Button>
        <Button>Limpar</Button>
      </ButtonsContainer>
    </div>
  );
};

export default Form;
