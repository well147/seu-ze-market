import Link from 'next/link';
import {
  H1,
  H2,
  Image,
  DetailsContainer
} from '../styles/components/details.style';

import { Button } from '../styles/global.style';

type Props = {
  name: string;
  description: string;
  image: string;
  price: number;
};

const Detail: React.FC<Props> = ({ name, description, image, price }) => {
  return (
    <DetailsContainer>
      <Image src={`/product-images/${image}`} />
      <H1>{name}</H1>
      <H2>R${price.toFixed(2).toString().replace('.', ',')}</H2>
      <H2>{description}</H2>
      <Link href="/products" passHref>
        <a>
          <Button primary>Voltar</Button>
        </a>
      </Link>
    </DetailsContainer>
  );
};

export default Detail;
