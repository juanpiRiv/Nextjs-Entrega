"use client";
import { getProductById } from "@/app/actions/product";

export async function generateProductMetadata(params) {
    const product = await getProductById(params.id);

    return {
        title: product?.title || "Producto no encontrado",
        description: product?.description || "Compra los mejores productos en IshopTech.",
        openGraph: {
            type: "website",
            url: `https://tusitio.com/products/${params.id}`,
            title: product?.title || "Producto no encontrado",
            description: product?.description || "Compra los mejores productos en IshopTech.",
            images: [{ url: product?.thumbnail || "/default-image.jpg" }],
        },
        twitter: {
            card: "summary_large_image",
            title: product?.title || "Producto no encontrado",
            description: product?.description || "Compra los mejores productos en IshopTech.",
            images: [product?.thumbnail || "/default-image.jpg"],
        },
    };
}
