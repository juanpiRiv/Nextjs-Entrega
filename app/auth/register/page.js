"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/context/useAuthStore";
import { Box, Typography, Button, IconButton, Snackbar, Alert } from "@mui/material";

export default function RegisterPage() {
    const { user, initAuth } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        initAuth();
        if (user) {
            router.push("/dashboard"); // 🔹 Redirigir después del render
        }
    }, [user]); // 🔹 Se ejecuta solo cuando `user` cambia

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Guardar el usuario en Firestore con el rol "user" por defecto
            await setDoc(doc(db, "users", user.uid), { role: "user" });

            // 🔹 No llamamos `router.push()` aquí, dejamos que `useEffect` lo haga
        } catch (err) {
            setError("Error al registrar usuario: " + err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleRegister} className="flex flex-col bg-background text-black p-6 rounded shadow-md">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="border p-2 w-full mb-2 text-black rounded-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="border p-2 w-full mb-2 text-black rounded-xl "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit"
                    className="font-bold tracking-tighter flex flex-col"
                    variant="outlined"
                    color="primary" >
                    Registrarse
                </Button>
            </form>
            {error && <p className="accent.main">{error}</p>}
        </div>
    );
}
