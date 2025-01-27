// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAELYebeX8fkkBzlTeY2I8U5H9EH1kBChk",
    authDomain: "nextjs-4bda5.firebaseapp.com",
    projectId: "nextjs-4bda5",
    storageBucket: "nextjs-4bda5.firebasestorage.app",
    messagingSenderId: "45550953202",
    appId: "1:45550953202:web:1b9bf1c4504f926775a66b",
    measurementId: "G-FQE3QDQPCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);