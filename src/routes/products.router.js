import { Router } from 'express';
const router = Router();

// Importar los controladores de productos
import { 
        getAllProducts,
        getAllProductById,
        createProduct
} from '../controllers/products.controller.js';


import { auth } from '../middlewares/auth.middlewares.js';

// Definir las rutas para productos
router.get('/products', getAllProducts);// Ruta para obtener todos los productos
router.get('/products/:id',auth, getAllProductById);// Ruta para obtener un producto por ID, requiere autenticación
router.post('/products', createProduct);// Ruta para crear un nuevo producto

export default router;