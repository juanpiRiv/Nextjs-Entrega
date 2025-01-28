"use client";

import React from "react";
import useCartStore from "@/app/context/useCartStore";
import { Box, Typography, Button, List, Divider } from "@mui/material"; // Asegúrate de importar Divider
import { useRouter } from "next/navigation"; // Usamos el hook useRouter
import CartItem from "@/components/CartItem";

export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);
    const router = useRouter(); // Usamos el hook useRouter
    const removeItem = useCartStore((state) => state.removeItem);

    // Función para calcular el precio total del carrito
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        // Redirigir al usuario a la página de Checkout
        router.push("/cart/checkout"); // Ruta correcta
    };

    return (
        <Box
            sx={{
                p: 4,
                maxWidth: 500,
                margin: "auto",
                backgroundColor: "background.default",
                borderRadius: 2,
                boxShadow: 2,
            }}
        >
            <Typography variant="h4" className="font-bold tracking-tighter" sx={{ mb: 3, textAlign: "center" }}>
                Carrito de Compras
            </Typography>

            {cart.length > 0 ? (
                <>
                    <List>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} onRemove={removeItem} />
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} /> {/* Este es el Divider que estaba causando el error */}

                    <Typography variant="h6" className="font-bold tracking-tighter" sx={{ textAlign: "right", mb: 2, color: "white" }}>
                        Total: ${getTotalPrice().toFixed(2)}
                    </Typography>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                        <Button variant="outlined" color="accent" className="font-bold tracking-tighter" onClick={clearCart}>
                            Vaciar carrito
                        </Button>
                        <Button variant="outlined" className="font-bold tracking-tighter" color="primary" onClick={handleCheckout}>
                            Finalizar compra
                        </Button>
                    </Box>
                </>
            ) : (
                <Typography
                    className="font-bold tracking-tighter"
                    variant="h6"
                    sx={{ textAlign: "center", color: "text", mt: 3 }}
                >
                    Tu carrito está vacío.
                </Typography>
            )}
        </Box>
    );
}
