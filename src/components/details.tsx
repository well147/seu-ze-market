import {
  Button,
  ItenName,
  ItenPrice,
  ItenDescripition,
  Image,
  DetailContainer
} from '../styles/components/product-details.style';

const Detail: React.FC = () => {
  return (
    <DetailContainer>
      <Image src="/products/apple.png" />
      <ItenName>Maçã</ItenName>
      <ItenDescripition>Descrição</ItenDescripition>
      <ItenPrice>R$: 2.5Kg</ItenPrice>
      <Button>Voltar</Button>
    </DetailContainer>
  );
};

export default Detail;
