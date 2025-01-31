"use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Para autenticación

import { doc, getDoc } from "firebase/firestore";
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAELYebeX8fkkBzlTeY2I8U5H9EH1kBChk",
    authDomain: "nextjs-4bda5.firebaseapp.com",
    projectId: "nextjs-4bda5",
    storageBucket: "nextjs-4bda5.appspot.com", 
    messagingSenderId: "45550953202",
    appId: "1:45550953202:web:1b9bf1c4504f926775a66b",
    measurementId: "G-FQE3QDQPCY"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
export const db = getFirestore(app); // Firestore
export const auth = getAuth(app); // Autenticación

export async function isAdmin(user) {
    if (!user) return false;
    try {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.role === "admin"; // Ajusta el nombre del campo si es diferente
        }
    } catch (error) {
        console.error("Error al verificar el rol de usuario:", error);
    }
    return false;
}
