import {db} from "./firebase.js";

import { collection, getDocs, doc, getDoc } from "firebase/firestore";

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

export const getAllProductById = async (id) => {//obtenemos un producto por su id
    try{
        const docRef = doc(productsCollection, id); //referencia al documento por su id
        const docSnap = await getDoc(docRef); //obtenemos el documento
        if (docSnap.exists()) { //verificamos si el documento existe
            return { id: docSnap.id, ...docSnap.data() }; //retornamos el producto con su id
        }   else {
            return null; //si no existe, retornamos null
        }   
    } catch (error) { //captamos errores
        console.error(error); //mostramos el error en la consola
    }
};