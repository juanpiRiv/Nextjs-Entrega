"use client";

import React from "react";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import useCartStore from "@/app/context/useCartStore";
export default function Cart() {
    const cart = useCartStore((state) => state.cart);
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Carrito de Compras
            </Typography>
            <List>
                {cart.map((item) => (
                    <ListItem key={item.id} sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography>{item.title} (x{item.quantity})</Typography>
                        <Typography>${item.price * item.quantity}</Typography>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: 3 }}>
                <Button variant="outlined" color="secondary" onClick={clearCart}>
                    Vaciar carrito
                </Button>
            </Box>
        </Box>
    );
}
