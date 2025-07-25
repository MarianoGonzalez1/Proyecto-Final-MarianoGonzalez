import * as Service from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    const products = await Service.getAllProducts();
    res.json(products);
};

export const getAllProductById = async (req, res) => {
    const { id } = req.params;//extraccion del id del producto
    const product = await Service.getAllProductById(id);//llamada al servicio para obtener el producto por id
    if (product) {//verificacion de si el producto existe
        res.json(product);
    } else {
        res.status(404).json({ message: 'El producto no existe' });//si no existe, se retorna un error 404
    }
};
