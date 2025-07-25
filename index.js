import 'dotenv/config';//Cargar las variables de entorno
import express from 'express';// Importar express
const app = express();

app.get("/", (req, res) => {
    res.json({message: "Bienvenido a la API de Productos"});
});

import productsRouter from './src/routes/products.router.js';
app.use("/api", productsRouter);

const PORT = process.env.PORT ||3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
