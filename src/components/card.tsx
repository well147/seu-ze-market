import Link from 'next/link';
import {
  Button,
  ProductName,
  ProductPrice,
  Container,
  Image,
  TextContainer,
  A
} from '../styles/components/card.style';

type Props = {
  id: number;
  image: string;
  price: number;
  name: string;
};

const Card: React.FC<Props> = ({ id, image, price, name }) => {
  return (
    <Container>
      <Image src={`/products/${image}`} />
      <TextContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          R${price.toFixed(2).toString().replace('.', ',')}
        </ProductPrice>
      </TextContainer>
      <Button>
        <Link href={`/products/${encodeURIComponent(id)}`} passHref>
          <A>Detalhes</A>
        </Link>
      </Button>
    </Container>
  );
};

export default Card;
