"use client";
import React, { useState, useEffect } from "react";  // Importa React aquí
import Load from "@/components/Load";
import ProductDetail from "@/components/ProductDetail";
import { getProductById } from "@/app/actions/product"; 

export default function ProductDetailPage({ params }) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Usamos React.use para desempaquetar `params`
    const { id } = React.use(params);

    useEffect(() => {
        if (!id) {
            console.error("ID no disponible.");
            return;
        }

        const fetchProduct = async () => {
            try {
                console.log("Fetching product with ID:", id);
                setIsLoading(true);
                const productData = await getProductById(id);
                console.log("Product data:", productData);

                if (productData.error) {
                    setError(productData.message);
                    setProduct(null);
                } else {
                    setProduct(productData.payload);
                }
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("Ocurrió un error al obtener los detalles del producto.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (isLoading) {
        return <Load />;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!product) {
        return <h1>Producto no encontrado</h1>;
    }

    return <ProductDetail product={product} />;
}
