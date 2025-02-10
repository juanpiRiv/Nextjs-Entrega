"use client"; 

import React, { useState, useEffect } from "react";
import { getBestSellingLaptops } from "@/app/actions/product"; 
import ProductCard from "@/components/ProductCard";
import Load from "@/components/Load"; 

export default function BestSellingLaptops() {
    const [laptops, setLaptops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchLaptops() {
            try {
                const { laptops, error } = await getBestSellingLaptops();
                if (error) throw new Error("No se pudieron cargar las laptops.");
                setLaptops(laptops);
            } catch (err) {
                console.error("Error al obtener laptops más vendidas:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLaptops();
    }, []);

    if (isLoading) return <Load />;
    if (error) return <p className="text-center text-gray-400 mt-6">{error}</p>;

    return (
        <div className="mt-8 px-4">
            <h2 className="text-2xl font-bold text-center text-gray-100 mb-4">🔥 Más Vendidos - Laptops 🔥</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {laptops.map(({ id, title, description, price, thumbnail }) => (
                    <ProductCard key={id} product={{ id, title, description, price, thumbnail }} />
                ))}
            </div>
        </div>
    );
}
