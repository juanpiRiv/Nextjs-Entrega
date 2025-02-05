"use client";
import React from "react";
import { useParams } from "next/navigation";
import Load from "@/components/Load";
import ProductDetail from "@/components/ProductDetail";
import useProduct from "@/hooks/useProduct"; // Asegúrate de importar el hook

export default function ProductDetailPage() {
    const params = useParams();
    const { id } = params || {};

    const { product, isLoading, error } = useProduct(id);

    if (isLoading) return <Load />;
    if (error) return <h1>{error}</h1>;
    if (!product) return <h1>Producto no encontrado</h1>;

    return <ProductDetail product={product} />;
}

