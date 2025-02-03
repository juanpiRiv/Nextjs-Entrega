"use client";
import React, { useState, useEffect } from "react";
import HomePage from "@/components/Homepage";
import BoxPresentacion from "@/components/BoxPresentacion";
import Load from "@/components/Load";

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
            <HomePage />
        </main>
    );
}
