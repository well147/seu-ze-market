import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  ProductName,
  ProductPrice,
  Container,
  Image,
  TextContainer
} from '../styles/components/card.style';

type Props = {
  image: string;
  price: number;
  name: string;
};

const Card: React.FC<Props> = ({ image, price, name }) => {
  return (
    <Container>
      <Image src={`/products/${image}`} />
      <TextContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </TextContainer>
      <Button>Detalhes</Button>
    </Container>
  );
};

export default Card;
