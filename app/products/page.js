"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/app/api/products/products";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get("category"); // Categoría seleccionada

    const allowedCategories = ["laptops","tablets","mens-watches", "mobile-accessories"]; // Categorías permitidas

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                let data = [];

                // Cargar productos de la categoría seleccionada si es válida
                if (category && allowedCategories.includes(category)) {
                    data = await fetchProducts(category);
                } else {
                    // Cargar productos de las categorías permitidas si no hay categoría seleccionada
                    const promises = allowedCategories.map((cat) => fetchProducts(cat));
                    const results = await Promise.all(promises);
                    data = results.flat(); // Combinar resultados de múltiples categorías
                }

                setProducts(data);
            } catch (error) {
                console.error("Error al cargar productos:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [category]);

    if (loading) return <div>Cargando productos...</div>;

    if (!products.length) return <div>No hay productos para mostrar.</div>;

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
