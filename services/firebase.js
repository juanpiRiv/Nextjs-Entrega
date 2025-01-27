import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAnalytics } from "firebase/analytics"; // Analytics

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAELYebeX8fkkBzlTeY2I8U5H9EH1kBChk",
    authDomain: "nextjs-4bda5.firebaseapp.com",
    projectId: "nextjs-4bda5",
    storageBucket: "nextjs-4bda5.firebasestorage.app",
    messagingSenderId: "45550953202",
    appId: "1:45550953202:web:1b9bf1c4504f926775a66b",
    measurementId: "G-FQE3QDQPCY"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app); // Base de datos

// Solo inicializar Analytics en el cliente
export let analytics = null;

if (typeof window !== "undefined") {
    try {
        analytics = getAnalytics(app);  // Esto solo se ejecutará en el cliente
    } catch (error) {
        console.error("Error al inicializar Analytics:", error);
    }
}

export { db, analytics };  // Exporta analytics solo si está definido (en el cliente)
