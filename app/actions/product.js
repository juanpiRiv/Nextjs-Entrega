import { collection, getDocs, doc, getDoc , query, where, limit} from "firebase/firestore"; // 🔹 Agrega getDoc aquí
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

export async function getProductById(id) {
    try {
        const docRef = doc(db, "products", id); // Asegúrate de que "products" es la colección principal
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
            return { payload: { id: docSnap.id, ...docSnap.data() }, error: false };
        } else {
            return { payload: null, error: true, message: "Producto no encontrado" };
        }
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return { payload: null, error: true, message: error.message };
    }
}
    
    export async function getBestSellingLaptops() {
        try {
            const q = query(collection(db, "products"), where("category", "==", "laptops"), limit(4));
            const querySnapshot = await getDocs(q);
    
            const laptops = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
            return { laptops, error: false };
        } catch (error) {
            console.error("Error al obtener laptops más vendidas:", error);
            return { laptops: [], error: true, message: error.message };
        }
    }