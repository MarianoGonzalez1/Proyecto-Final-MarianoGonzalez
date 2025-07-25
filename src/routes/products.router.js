import { Router } from 'express';
const router = Router();

import { 
    getAllProducts,
    getAllProductById
 } from '../controllers/products.controller.js';

router.get('/products', getAllProducts);
router.get('/products/:id', getAllProductById);


export default router;