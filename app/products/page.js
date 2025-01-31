"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/app/actions/product";
import Load from "@/components/Load";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");

    // 🔹 Cargar productos desde Firestore
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const { payload: allProducts, error } = await getProducts();

                if (error) {
                    console.error("Error al cargar productos", error);
                    setProducts([]);
                } else {
                    let filteredProducts = allProducts;

                    // 🔹 Si hay una categoría seleccionada, filtrar productos
                    if (category && category.trim() !== "") {
                        filteredProducts = allProducts.filter((product) => product.category === category);
                    }

                    setProducts(filteredProducts);
                }
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [category]); // 🔹 Recargar productos al cambiar de categoría

    if (loading) return <Load />;
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
