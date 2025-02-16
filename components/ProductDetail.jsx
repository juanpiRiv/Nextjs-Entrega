"use client";

import React, { useState } from "react";
import useCartStore from "@/hooks/useCartStore";
import { Box, Typography, Button, IconButton, Snackbar, Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1); // Estado local para la cantidad
    const [snackbarOpen, setSnackbarOpen] = useState(false); // Estado para el Snackbar
    const addToCart = useCartStore((state) => state.addToCart); // Acción para agregar al carrito

    const handleIncrease = () => setQuantity((prev) => prev + 1); // Incrementar cantidad
    const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1)); // Decrementar cantidad (mínimo 1)

    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Agregar producto al carrito con cantidad seleccionada
        setQuantity(1); // Reiniciar el contador a 1
        setSnackbarOpen(true); // Mostrar notificación
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false); // Cerrar notificación
    };

    return (
        <Box sx={{ p: 3, maxWidth: 800, margin: "0 auto" }}>
            {/* Detalles del producto */}
            <Typography variant="h4" sx={{ mb: 2 }}>
                {product.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {product.description}
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
                Precio: ${product.price}
            </Typography>
            <img
                src={product.thumbnail || "https://via.placeholder.com/150"}
                alt={product.title || "Producto"}
                style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
            />

            {/* Contador de cantidad */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                    justifyContent: "center",
                }}
            >
                <IconButton
                    color="primary"
                    onClick={handleDecrease}
                    sx={{ border: "1px solid", borderRadius: "50%" }}
                >
                    <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{quantity}</Typography>
                <IconButton
                    color="primary"
                    onClick={handleIncrease}
                    sx={{ border: "1px solid", borderRadius: "50%" }}
                >
                    <AddIcon />
                </IconButton>
            </Box>

            {/* Botón de comprar */}
            <Button
                className="font-bold tracking-tighter"
                variant="outlined"
                color="primary"
                onClick={handleAddToCart}
                sx={{ width: "100%" }}
            >
                Agregar al carrito
            </Button>

            {/* Snackbar para mostrar notificación */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000} // Se oculta automáticamente después de 3 segundos
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Posición del Snackbar
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{
                        width: "100%",
                        backgroundColor: "primary.main", // Fondo primario
                        color: "background.default", // Texto claro
                        borderRadius: 3,
                        fontWeight: "bold",
                    }}
                >
                    Producto agregado al carrito
                </Alert>
            </Snackbar>
        </Box>
    );
}


