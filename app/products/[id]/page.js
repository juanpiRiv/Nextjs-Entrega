import React from "react";
import { fetchProductById } from "@/app/api/products/products";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductDetailPage({ params }) {
    try {
        // Asegurarse de que params.id sea válido
        const product = await fetchProductById(params.id);

        return <ProductDetail product={product} />;
    } catch (error) {
        return <h1>Producto no encontrado</h1>;
    }
}