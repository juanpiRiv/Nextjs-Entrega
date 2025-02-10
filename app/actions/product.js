// Este es el archivo que define las funciones relacionadas con los productos
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

// Función para obtener todos los productos
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return { payload: products, error: false };
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return { payload: [], error: true, message: error.message };
    }
}

// Función para obtener un producto por su ID
export async function getProductById(id) {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        return { payload: products, error: false };
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return { payload: [], error: true, message: error.message };
    }
}

