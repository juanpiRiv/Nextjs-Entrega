"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box, List, ListItemButton, ListItemText, Typography, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function CategoryMenu() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el Drawer
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); // Categoría seleccionada

    const categories = [
        { name: "Todos los productos", value: "" },
        { name: "Mobile Accessories", value: "mobile-accessories" },
        { name: "Laptops", value: "laptops" },
        { name: "Men's Watches", value: "mens-watches" },
        { name: "Tablets", value: "tablets" },
    ];

    const toggleDrawer = (open) => () => {
        setIsOpen(open); // Cambiar el estado del Drawer
    };

    const drawerContent = (
        <Box
            sx={{
                width: 300,
                bgcolor: "background",
                p: 2,
            }}
        >
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    textAlign: "center",
                    mb: 2,
                }}
            >
                Categorías
            </Typography>
            <List component="nav">
                {categories.map((cat) => (
                    <Link
                        key={cat.value}
                        href={`/products${cat.value ? `?category=${cat.value}` : ""}`}
                        passHref
                    >
                        <ListItemButton
                            selected={category === cat.value || (!category && cat.value === "")}
                            onClick={toggleDrawer(false)} // Cerrar el Drawer al seleccionar una categoría
                            sx={{
                                borderRadius: 2,
                                mb: 1,
                                "&.Mui-selected": {
                                    bgcolor: "primary.main",
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: "primary.main",
                                    },
                                },
                            }}
                        >
                            <ListItemText
                                primary={cat.name}
                                sx={{
                                    textTransform: "capitalize",
                                }}
                            />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Botón para abrir el Sidebar (solo visible en móviles) */}
            <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{
                    position: "fixed", // Fijo en la esquina superior izquierda
                    top: 400,
                    left: 0,
                    zIndex: 1201, // Asegura que el botón esté encima del contenido
                    bgcolor: "rgba(128, 128, 128, 0.3)",
                    boxShadow: 3,
                    "&:hover": {
                        bgcolor: "rgba(128, 128, 128, 0.3)",
                    },
                    display: { xs: "block", sm: "none" }, // Mostrar solo en pantallas pequeñas
                }}
            >
                <MenuIcon sx={{ fontSize: 48 }} />
            </IconButton>

            {/* Drawer para el Sidebar */}
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={{ enter: 500, exit: 500 }} // Duración personalizada
                ModalProps={{
                    keepMounted: true, // Mejora el rendimiento en móviles
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 300,
                        bgcolor: "rgba(128, 128, 128, 0.3)",
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* Sidebar fijo para pantallas grandes */}
            <Box
                sx={{
                    display: { xs: "none", sm: "block" }, // Ocultar en pantallas pequeñas
                }}
            >
                {drawerContent}
            </Box>
        </>
    );
}
