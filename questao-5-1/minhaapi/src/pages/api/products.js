// pages/api/produtos.js
import { createRouter} from 'next-connect';

const router = createRouter();

router.get((req, res) => {
  // Exemplo de uma lista de produtos. Você pode adaptar conforme necessário ou buscar de um banco de dados.
  const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 },
  ];

  res.status(200).json(produtos);
});

export default router.handler();
