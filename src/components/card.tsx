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
      <Link href={`/products/${encodeURIComponent(id)}`} passHref>
        <Image src={`/product-images/${image}`} />
      </Link>
      <TextContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          R${price.toFixed(2).toString().replace('.', ',')}
        </ProductPrice>
      </TextContainer>
      <Link href={`/products/${encodeURIComponent(id)}`} passHref>
        <A>
          <Button>Detalhes</Button>
        </A>
      </Link>
    </Container>
  );
};

export default Card;
