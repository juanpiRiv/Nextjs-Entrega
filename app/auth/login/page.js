"use client";
import { useState, useEffect } from "react";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/context/useAuthStore";
import { Box, Typography, Button, IconButton, Snackbar, Alert } from "@mui/material";
export default function LoginPage() {
    const { user, initAuth } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        initAuth();
    }, [initAuth]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard"); // Redirige al panel de administración
        } catch (err) {
            setError("Credenciales incorrectas o usuario no registrado");
        }
    };

    if (user) {
        router.push("/dashboard"); // Redirige si ya está autenticado
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleLogin} className="flex flex-col bg-background text-black p-6 rounded shadow-md">
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
                    className="border p-2 w-full mb-2 text-black rounded-xl"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button                className="font-bold tracking-tighter"
                variant="outlined"
                color="primary"
                sx={{ width: "100%" }} type="submit">Iniciar Sesión</Button>
            </form>
            {error && <p className="accent.main">{error}</p>}
        </div>
    );
}