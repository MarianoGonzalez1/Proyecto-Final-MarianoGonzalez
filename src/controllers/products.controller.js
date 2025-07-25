import * as Service from '../services/products.service.js';

// Función para obtener todos los productos
export const getAllProducts = async (req, res) => {
    const products = await Service.getAllProducts();
    res.json(products);
};

// Función para obtener un producto por su ID
export const getAllProductById = async (req, res) => {
    const { id } = req.params;//extraccion del id del producto
    const product = await Service.getAllProductById(id);//llamada al servicio para obtener el producto por id
    if (product) {//verificacion de si el producto existe
        res.json(product);
    } else {
        res.status(404).json({ message: 'El producto no existe' });//si no existe, se retorna un error 404
    }
};

// Función para crear un nuevo producto
export const createProduct = async (req, res) => {
    const { name, price, description } = req.body;//extraccion de los datos del producto

    const newProduct = await Service.createProduct({ name, price, description });//llamada al servicio para crear el producto
    res.status(201).json(newProduct);//retorno del producto creado con un status
};