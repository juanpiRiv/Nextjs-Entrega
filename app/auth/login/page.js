"use client";
import { useState, useEffect } from "react";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/context/useAuthStore";
import { Typography, Button, Snackbar, Alert } from "@mui/material";

export default function LoginPage() {
    const { user, initAuth } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const router = useRouter();

    // Inicializa la autenticación
    useEffect(() => {
        initAuth();
    }, [initAuth]);

    
    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);


            setSnackbarOpen(true);


            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (err) {
            setError("Credenciales incorrectas o usuario no registrado");
        }
    };


    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Typography variant="h4" className="font-bold tracking-tighter mb-1">
                Login
            </Typography>
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
                <Button
                    className="font-bold tracking-tighter"
                    variant="outlined"
                    color="primary"
                    sx={{ width: "100%" }}
                    type="submit"
                >
                    Iniciar Sesión
                </Button>
            </form>
            {error && <p className="text-red-500">{error}</p>}


            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{
                        width: "100%",
                        backgroundColor: "primary.main",
                        color: "background.default",
                        borderRadius: 3,
                        fontWeight: "bold",
                    }}
                >
                    ¡Inicio de sesión exitoso! Redirigiendo...
                </Alert>
            </Snackbar>
        </div>
    );
}