// pages/api/products.js
import { createRouter} from 'next-connect';
import cors from 'cors';

const router = createRouter();

router.use(cors({ origin: '*' }));

const products = [
  { id: 1, name: 'Produto 1 Next' },
  { id: 2, name: 'Lista de produtos' },
  { id: 3, name: 'Consumidas da API' },
];

router.get((req, res) => {
  res.status(200).json(products);
});

export default router.handler();
