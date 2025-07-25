import { Router } from 'express';
const router = Router();

import { 
        getAllProducts,
        getAllProductById
        } from '../controllers/products.controller.js';

        import { auth } from '../middlewares/auth.middlewares.js';

router.get('/products', getAllProducts);
router.get('/products/:id',auth, getAllProductById);

export default router;