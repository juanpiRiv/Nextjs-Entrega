"use client";
import { useState, useEffect } from "react";
import { auth, db } from "@/services/firebase";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import useAuthStore from "@/app/context/useAuthStore";
import { Typography, Button, Snackbar, Alert } from "@mui/material";

export default function RegisterPage() {
    const { user, initAuth } = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const router = useRouter();

    // Inicializa la autenticación y redirige si el usuario ya está autenticado
    useEffect(() => {
        initAuth();
        if (user) {
            router.push("/");
        }
    }, [user, initAuth, router]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
        
            const methods = await fetchSignInMethodsForEmail(auth, email);
            if (methods.length > 0) {
                setError("El correo ya está registrado. Intenta con otro.");
                return;
            }

        
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            
            await setDoc(doc(db, "users", user.uid), { role: "user" });

            
            setSnackbarOpen(true);

            
            setTimeout(() => {
                router.push("/");
            }, 3000);
        } catch (err) {
            console.error("Error en el registro:", err);
            if (err.code === "auth/email-already-in-use") {
                setError("El correo ya está registrado. Intenta con otro.");
            } else {
                setError("Error al registrar usuario: " + err.message);
            }
        }
    };

    
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Typography variant="h4" className="font-bold tracking-tighter mb-1">
                Register
            </Typography>
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
                    className="border p-2 w-full mb-2 text-black rounded-xl"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button
                    className="font-bold tracking-tighter"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    sx={{ width: "100%" }}
                >
                    Registrarse
                </Button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            
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
                    ¡Registro exitoso! Redirigiendo...
                </Alert>
            </Snackbar>
        </div>
    );
}