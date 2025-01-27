"use client";
import React, { useState, useEffect } from "react";
import CategoryMenu from "@/components/CategoryMenu";
import { Box } from "@mui/material";

export default function ProductsLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClient, setIsClient] = useState(false); // Nuevo estado para asegurarse de que el componente solo se monte en el cliente

    useEffect(() => {
        setIsClient(true); // Marca el componente como ejecutado en el cliente
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    if (!isClient) {
        return null; // No se renderiza nada en el servidor
    }

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <CategoryMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

            {/* Contenido Principal */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    );
}
