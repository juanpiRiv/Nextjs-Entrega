"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import useCartStore from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/services/firebase";  // Importa desde firebaseConfig
import Load from "@/components/Load"; // Importa el componente Load

export default function Checkout() {
    const router = useRouter();
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        codigoPostal: "",
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);  
    const [trackingCode, setTrackingCode] = useState("");  
    const [isLoading, setIsLoading] = useState(false); // Estado de carga

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Inicia la carga

        try {
            const docRef = await addDoc(collection(db, "orders"), {
                ...formData,
                cart,
                createdAt: new Date(),
            });

            setTrackingCode(docRef.id);
            clearCart();  
            setSnackbarOpen(true);  
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
        } finally {
            setIsLoading(false); // Finaliza la carga
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false); 
        router.push("/"); 
    };

    if (isLoading) return <Load />; // Muestra el Load mientras se procesa la compra

    return (
        <Box sx={{ p: 4, maxWidth: 500, margin: "auto", backgroundColor: "background.default", borderRadius: 2, boxShadow: 3 , mt: 10}}>
            <Typography variant="h4" className="font-bold tracking-tighter" sx={{ mb: 3, textAlign: "center" }}>
                Finalizar Compra
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    required
                    InputLabelProps={{
                        style: {
                            color: 'primary.main', // Color de la etiqueta
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'primary.main', // Color del texto dentro del input
                        },
                    }}
                    focused
                />
                <TextField
                    fullWidth
                    label="Correo Electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    required
                    InputLabelProps={{
                        style: {
                            color: 'primary.main', // Color de la etiqueta
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'primary.main', // Color del texto dentro del input
                        },
                    }}
                    focused
                />
                <TextField
                    fullWidth
                    label="Dirección"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    required
                    InputLabelProps={{
                        style: {
                            color: 'primary.main', // Color de la etiqueta
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'primary.main', // Color del texto dentro del input
                        },
                    }}
                    focused
                />
                <TextField
                    fullWidth
                    label="Código Postal"
                    name="codigoPostal"
                    value={formData.codigoPostal}
                    onChange={handleInputChange}
                    sx={{ mb: 2 }}
                    required
                    InputLabelProps={{
                        style: {
                            color: 'primary.main', // Color de la etiqueta
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'primary.main', // Color del texto dentro del input
                        },
                    }}
                    focused
                />
                <Button variant="outlined" className="font-bold tracking-tighter" color="primary" type="submit" fullWidth>
                    Confirmar Pedido
                </Button>
            </form>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={7000}
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
                    ¡Compra realizada con éxito! Tu código de seguimiento es: {trackingCode}
                </Alert>
            </Snackbar>
        </Box>
    );
}
