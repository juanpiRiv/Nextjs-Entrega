"use client";
import React, { useState } from "react";
import CategoryMenu from "@/components/CategoryMenu";
import { Box } from "@mui/material";

export default function ProductsLayout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh"}}>
            {/* Sidebar */}
            <CategoryMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

            {/* Contenido Principal */}
            <Box
                component="main"
                sx={{
                
                    flexGrow: 1,
                    p: 3,
                }}
            >
                {children}
            </Box>
        </Box>
    );
}