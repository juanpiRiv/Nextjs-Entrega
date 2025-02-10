"use client";
import React, { useState, useEffect } from "react";
import HomePage from "@/components/Homepage";
import BoxPresentacion from "@/components/BoxPresentacion";
import Load from "@/components/Load";
import BestSellingLaptops from "@/components/BestSellingLaptops"; // 🔥 Importamos las cards de laptops más vendidas

export default function HomeClient() {  // ✅ Asegura que se exporte correctamente
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Load />;
    }

    return (
        <main>
            <BoxPresentacion />
            <BestSellingLaptops /> {/* 🔥 Aquí agregamos las 4 laptops más vendidas */}
            <HomePage />
        </main>
    );
}
