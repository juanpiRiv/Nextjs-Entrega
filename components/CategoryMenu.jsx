"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Box, List, ListItemButton, ListItemText, Typography, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

export default function CategoryMenu() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el Drawer
    const [categories, setCategories] = useState([]); // 🔹 Estado para categorías dinámicas
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); // Categoría seleccionada

    // 🔹 Obtener categorías únicas desde los productos en Firestore
    useEffect(() => {
        const fetchCategories = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const allCategories = querySnapshot.docs.map((doc) => doc.data().category);

            // 🔹 Filtramos categorías duplicadas usando `Set`
            const uniqueCategories = [...new Set(allCategories)];

            // 🔹 Agregamos "Todos los productos" como primera opción
            setCategories([{ name: "Todos los productos", value: "" }, ...uniqueCategories.map(name => ({ name, value: name }))]);
        };

        fetchCategories();
    }, []);

    const toggleDrawer = (open) => () => {
        setIsOpen(open); // Cambiar el estado del Drawer
    };

    const drawerContent = (
        <Box sx={{ width: 300, bgcolor: "background", p: 2 }}>
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
                                sx={{ textTransform: "capitalize" }}
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
                    position: "fixed",
                    top: 400,
                    left: 0,
                    zIndex: 1201,
                    bgcolor: "rgba(128, 128, 128, 0.3)",
                    boxShadow: 3,
                    "&:hover": {
                        bgcolor: "rgba(128, 128, 128, 0.3)",
                    },
                    display: { xs: "block", sm: "none" },
                }}
            >
                <MenuIcon sx={{ fontSize: 48 }} />
            </IconButton>

            {/* Drawer para el Sidebar */}
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={{ enter: 500, exit: 500 }}
                ModalProps={{ keepMounted: true }}
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
            <Box sx={{ display: { xs: "none", sm: "block" } }}>{drawerContent}</Box>
        </>
    );
}
