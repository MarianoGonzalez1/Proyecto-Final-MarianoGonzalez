import 'dotenv/config';//Cargar las variables de entorno
import express from 'express';// Importar express
const app = express();

app.use(express.json());// Middleware para parsear JSON

app.get("/", (req, res) => {// Ruta raíz
    res.json({message: "Bienvenido a la API de Productos"});
});

import productsRouter from './src/routes/products.router.js';
app.use("/api", productsRouter);// Ruta para productos


import authRouter from './src/routes/auth.router.js';
app.use("/api/auth", authRouter);// Ruta para autenticación

const PORT = process.env.PORT ||3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
