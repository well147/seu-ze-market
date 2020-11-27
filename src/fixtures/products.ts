import { builtinModules } from 'module';
import Products from '../pages/products';

interface Product {
  name: string;
  description: string;
  punchline: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    name: 'Maçã',
    description: 'Maçã organica comprada no Pomar da Serra em belo horizonte.',
    punchline:
      'Para entusiastas de maçã, desencorajo fortemente o consumo das sementes, devido a possibilidade de envenenamento por cianeto.',
    price: 2.5,
    image: 'apple.png'
  },
  {
    name: 'Beterraba',
    description: 'Beterraba organica comprada no CEASA.',
    punchline: '',
    price: 3.0,
    image: 'beetroot.png'
  },
  {
    name: 'Pão',
    description: 'Pão Frãnces assado no forno.',
    punchline: 'Solo pane francese.',
    price: 31.0,
    image: 'bread.png'
  },
  {
    name: 'Cenoura',
    description: 'Cenoura comprada no Ceasa.',
    punchline: 'Isso é uma piada, ria, ria imediatamente.',
    price: 2.0,
    image: 'carrot.png'
  },
  {
    name: 'Sementes de Cacau',
    description: 'Sementes de cacau frescas.',
    punchline: 'Obtidas de forma 100% legal.',
    price: 60.0,
    image: 'cocoa-beans.png'
  },
  {
    name: 'Frango Assado',
    description: 'Frango assado na maquininha na frente da minha loja.',
    punchline: 'Você realmente ta interessado em onde eu preparo o frango?',
    price: 15.0,
    image: 'cooked-chicken.png'
  },
  {
    name: 'Cordeiro Assado',
    description: 'Cordeiro assado.',
    punchline: 'O fato de ter vindo de uma ovelha é apenas um detalhe.',
    price: 16.0,
    image: 'cooked-mutton.png'
  },
  {
    name: 'Cordeiro Assado',
    description: 'Cordeiro assado.',
    punchline: 'O fato de ter vindo de uma ovelha é apenas um detalhe.',
    price: 16.0,
    image: 'cooked-mutton.png'
  },
  {
    name: 'Bifão Frito',
    description: 'Bife de boi feito na chapa.',
    punchline: '"Garçom: Bife de boi..."',
    price: 7.5,
    image: 'steak.png'
  },
  {
    name: 'Bifão Frito 2',
    description: 'Bife de porco feito na chapa.',
    punchline: '"Garçom: ...ou de porco?"',
    price: 7.5,
    image: 'cooked-porkchop.png'
  },
  {
    name: 'Coelho Cozido',
    description: 'Carne de coelho cozida.',
    punchline:
      'Definitivamente não utilizado para testes de produto de beleza.',
    price: 14,
    image: 'cooked-rabbit.png'
  }
];

export default products;
