"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import useCartStore from "@/app/context/useCartStore";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/services/firebase";  // Importa desde firebaseConfig

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
    const [snackbarOpen, setSnackbarOpen] = useState(false);  // Estado para manejar el Snackbar
    const [trackingCode, setTrackingCode] = useState("");  // Estado para almacenar el código de seguimiento

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Agregar el pedido a Firebase y obtener el ID del documento
            const docRef = await addDoc(collection(db, "orders"), {
                ...formData,
                cart,
                createdAt: new Date(),
            });

            // Usamos el ID generado por Firebase como código de seguimiento
            setTrackingCode(docRef.id);
            clearCart();  // Vaciar el carrito después de la compra
            setSnackbarOpen(true);  // Mostrar el Snackbar
        } catch (error) {
            console.error("Error al enviar el pedido:", error);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);  // Cerrar el Snackbar
        router.push("/");  // Redirige al inicio
    };

    return (
        <Box sx={{ p: 4, maxWidth: 500, margin: "auto", backgroundColor: "background.default", borderRadius: 2, boxShadow: 3 }}>
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
                            color: 'white', // Cambia el color de la etiqueta a blanco
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'white', // Cambia el color del texto dentro del input a blanco
                        },
                    }}
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
                            color: 'white', // Cambia el color de la etiqueta a blanco
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'white', // Cambia el color del texto dentro del input a blanco
                        },
                    }}
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
                            color: 'white', // Cambia el color de la etiqueta a blanco
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'white', // Cambia el color del texto dentro del input a blanco
                        },
                    }}
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
                            color: 'white', // Cambia el color de la etiqueta a blanco
                        },
                    }}
                    InputProps={{
                        style: {
                            color: 'white', // Cambia el color del texto dentro del input a blanco
                        },
                    }}
                />
                <Button variant="outlined" className="font-bold tracking-tighter" color="primary" type="submit" fullWidth>
                    Confirmar Pedido
                </Button>
            </form>

            {/* Snackbar para mostrar el código de seguimiento */}
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
