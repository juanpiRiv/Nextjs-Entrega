"use client"
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/app/actions/product";
import Load from "@/components/Load"; // Usamos getProducts en lugar de fetchProducts

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    const allowedCategories = ["laptops", "tablets", "mens-watches", "mobile-accessories"];

    // Cargar productos desde Firestore
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                let data = [];

                // Filtrar productos por categoría si es necesario
                const { payload: allProducts, error } = await getProducts();
                if (error) {
                    console.error("Error al cargar productos", error);
                } else {
                    if (category && allowedCategories.includes(category)) {
                        data = allProducts.filter((product) => product.category === category);
                    } else {
                        data = allProducts;
                    }
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

    if (loading) return <Load/>;
    if (!products.length) return <div>No hay productos para mostrar.</div>;

    return (
        <div>
            {/* Mostrar los productos */}
            <div className="flex flex-wrap gap-4 justify-center">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
