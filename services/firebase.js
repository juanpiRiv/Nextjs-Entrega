import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener productos desde Firebase
export async function fetchProductsFromFirebase(category) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}
}