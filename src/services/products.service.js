import * as Model from '../models/products.model.js';

// Exportar funciones del modelo para ser utilizadas en el servicio
export const getAllProducts = async () => {
    return await Model.getAllProducts();
};

// Exportar funciones del modelo para obtener un producto por ID y crear un nuevo producto
export const getAllProductById = async (id) => {
    return await Model.getAllProductById(id);
}

// Exportar función del modelo para crear un nuevo producto
export const createProduct = async (data) => {
    return await Model.createProduct(data);
}