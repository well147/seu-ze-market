import {
  Button,
  ItemName,
  ItemPrice,
  ItemDescripition,
  Image,
  DetailContainer
} from '../styles/components/product-details.style';

const Detail: React.FC = () => {
  return (
    <DetailContainer>
      <Image src="/product-images/apple.png" />
      <ItemName>Maçã</ItemName>
      <ItemDescripition>Descrição</ItemDescripition>
      <ItemPrice>R$: 2.5Kg</ItemPrice>
      <Button>Voltar</Button>
    </DetailContainer>
  );
};

export default Detail;
