import { addDoc, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase"; // Configuración de Firebase

// Comprobar si estamos en el servidor o cliente
const isClient = typeof window !== 'undefined';

// Obtener todos los productos desde Firestore
export async function getProducts() {
    try {
        // Solo ejecutar la consulta en el cliente
        if (!isClient) {
            return { payload: [], message: "No se puede obtener productos en el servidor", error: true };
        }

        const productsCollection = collection(db, "products");
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return { payload: products, message: "Se obtuvieron los productos correctamente", error: false };
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return { payload: null, message: "No se pudieron obtener los productos", error: true };
    }
}

// Obtener un producto por su ID desde Firestore
export async function getProductById(id) {
    if (!id) {
        return null;
    }

    try {
        const productDoc = doc(db, "products", id);
        const snapshot = await getDoc(productDoc);

        if (!snapshot.exists()) {
            return null;  // Producto no encontrado
        }

        return { id: snapshot.id, ...snapshot.data() };  // Devolver todos los datos del producto
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return null;
    }
}

