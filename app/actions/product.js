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


export async function getProductById(id) {
    if (!id) {
        console.error("ID no proporcionado");
        return { payload: null, message: "No se proporcionó un ID válido", error: true };
    }

    try {
        console.log("Consultando Firestore para el producto con ID:", id);
        const productDoc = doc(db, "products", id);
        const snapshot = await getDoc(productDoc);

        if (!snapshot.exists()) {
            console.log("Producto no encontrado en Firestore.");
            return { payload: null, message: "El producto no existe", error: true };
        }

        console.log("Producto encontrado:", snapshot.data());
        return { payload: { id: snapshot.id, ...snapshot.data() }, message: "Se obtuvo el producto correctamente", error: false };
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        return { payload: null, message: "No se pudo obtener el producto", error: true };
    }
}
