import {db} from "./firebase.js";

import { collection, getDocs } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {//obtenemos la colección de productos
    try {
        const snapshot = await getDocs(productsCollection); //obtenemos los documentos de la colección
        const products = snapshot.docs.map((doc)=> ({ // transformamos los documentos en un array de objetos
            id: doc.id,
            ...doc.data(),
        }));
        return products; // retornamos el array de productos
    } catch (error) { //captamos errores
        console.error(error);// mostramos el error en la consola
    }
};