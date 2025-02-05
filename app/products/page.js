"use client";
import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Load from "@/components/Load";
import { useSearchParams } from "next/navigation";
import { getProducts } from "@/app/actions/product"; 

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams();
    const category = searchParams.get("category");


    const filteredProducts = useMemo(() => {
        if (category) {
            return products.filter((product) => product.category === category);
        }
        return products;
    }, [category, products]); 

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const { payload: allProducts, error } = await getProducts();

                if (error) {
                    console.error("Error al cargar productos", error);
                    setProducts([]);
                } else {
                    setProducts(allProducts);
                }
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []); // Solo carga los productos una vez al cargar el componente

    if (loading) return <Load />;
    if (!filteredProducts.length) return <div>No hay productos para mostrar.</div>;

    return (
        <div>
            <div className="flex flex-wrap gap-4 justify-center">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
