"use client";
import React from "react";
import { useParams } from "next/navigation";
import Load from "@/components/Load";
import ProductDetail from "@/components/ProductDetail";
import useProduct from "@/hooks/useProduct";
import Head from "next/head";

export default function ProductDetailPage() {
    const params = useParams();
    const { id } = params || {};

    const { product, isLoading, error } = useProduct(id);

    if (isLoading) return <Load />;
    if (error) return <h1>{error}</h1>;
    if (!product) return <h1>Producto no encontrado</h1>;

    return (
        <>
            <Head>
                <title>{product.title || "Producto no encontrado"}</title>
                <meta name="description" content={product.description || "Compra los mejores productos en IshopTech."} />
                <meta property="og:title" content={product.title || "Producto no encontrado"} />
                <meta property="og:description" content={product.description || "Compra los mejores productos en IshopTech."} />
                <meta property="og:image" content={product.thumbnail || "/default-image.jpg"} />
            </Head>
            <ProductDetail product={product} />
        </>
    );
}
