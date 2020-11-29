export type Product = {
  id: number;
  name: string;
  description: string;
  punchline?: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Maçã',
    description: 'Maçã organica comprada no Pomar da Serra em belo horizonte.',
    punchline:
      'Para entusiastas de maçã, desencorajo fortemente o consumo das sementes, devido a possibilidade de envenenamento por cianeto.',
    price: 2.5,
    image: 'apple.png'
  },
  {
    id: 2,
    name: 'Beterraba',
    description: 'Beterraba organica comprada no CEASA.',
    punchline: '🤢',
    price: 3.0,
    image: 'beetroot.png'
  },
  {
    id: 3,
    name: 'Pão',
    description: 'Pão Frãnces assado no forno.',
    punchline: 'Solo pane francese.',
    price: 31.0,
    image: 'bread.png'
  },
  {
    id: 4,
    name: 'Cenoura',
    description: 'Cenoura comprada no Ceasa.',
    punchline: 'Isso é uma piada, ria, ria imediatamente.',
    price: 2.0,
    image: 'carrot.png'
  },
  {
    id: 5,
    name: 'Sementes de Cacau',
    description: 'Sementes de cacau frescas.',
    punchline: 'Obtidas de forma 100% legal.',
    price: 60.0,
    image: 'cocoa-beans.png'
  },
  {
    id: 6,
    name: 'Frango Assado',
    description: 'Frango assado na maquininha na frente da minha loja.',
    punchline: 'Você realmente ta interessado em onde eu preparo o frango?',
    price: 15.0,
    image: 'cooked-chicken.png'
  },
  {
    id: 7,
    name: 'Cordeiro Assado',
    description: 'Cordeiro assado.',
    punchline: 'O fato de ter vindo de uma ovelha é apenas um detalhe.',
    price: 16.0,
    image: 'cooked-mutton.png'
  },
  {
    id: 8,
    name: 'Bifão Frito',
    description: 'Bife de boi feito na chapa.',
    punchline: '"Garçom: Bife de boi..."',
    price: 7.5,
    image: 'steak.png'
  },
  {
    id: 9,
    name: 'Bifão Frito 2',
    description: 'Bife de porco feito na chapa.',
    punchline: '"Garçom: ...ou de porco?"',
    price: 7.5,
    image: 'cooked-porkchop.png'
  },
  {
    id: 10,
    name: 'Coelho Cozido',
    description: 'Carne de coelho cozida.',
    punchline:
      'Definitivamente não utilizado para testes de produto de beleza.',
    price: 14,
    image: 'cooked-rabbit.png'
  },
  {
    id: 11,
    name: 'Alga seca',
    description: 'Alga seca.',
    punchline: 'É uma alga... que tá seca.',
    price: 14,
    image: 'dried-kelp.png'
  },
  {
    id: 12,
    name: 'Melancia',
    description: '94% água.',
    punchline: 'grep "Piada Melancia:" ../../piadas/piadas.txt',
    price: 11.2,
    image: 'melon-slice.png'
  },
  {
    id: 13,
    name: 'Bacalhau',
    description:
      'Cod is the common name for the demersal fish genus Gadus, belonging to the family Gadidae.[1] Cod is also used as part of the common name for a number of other fish species, and one species that belongs to genus Gadus is commonly not called cod',
    price: 130.4,
    image: 'raw-cod.png'
  },
  {
    id: 14,
    name: 'Sementes de Cacau',
    description: 'Sementes de cacau frescas.',
    punchline: 'Obtidas de forma 100% legal.',
    price: 60.0,
    image: 'cocoa-beans.png'
  },
  {
    id: 15,
    name: 'Cordeiro Assado',
    description: 'Cordeiro assado.',
    punchline: 'O fato de ter vindo de uma ovelha é apenas um detalhe.',
    price: 16.0,
    image: 'cooked-mutton.png'
  },
  {
    id: 16,
    name: 'Alga seca',
    description: 'Alga seca.',
    punchline: 'É uma alga... que tá seca.',
    price: 14,
    image: 'dried-kelp.png'
  },
  {
    id: 17,
    name: 'Coelho Cozido',
    description: 'Carne de coelho cozida.',
    punchline:
      'Definitivamente não utilizado para testes de produto de beleza.',
    price: 14,
    image: 'cooked-rabbit.png'
  },
  {
    id: 18,
    name: 'Melancia',
    description: '94% água.',
    punchline: 'grep "Piada Melancia:" ../../piadas/piadas.txt',
    price: 11.2,
    image: 'melon-slice.png'
  },
  {
    id: 19,
    name: 'Bifão Frito',
    description: 'Bife de boi feito na chapa.',
    punchline: '"Garçom: Bife de boi..."',
    price: 7.5,
    image: 'steak.png'
  },
  {
    id: 20,
    name: 'Bifão Frito 2',
    description: 'Bife de porco feito na chapa.',
    punchline: '"Garçom: ...ou de porco?"',
    price: 7.5,
    image: 'cooked-porkchop.png'
  }
];

export default products;
