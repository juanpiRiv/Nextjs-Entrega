import { useState, useEffect } from "react";
import { getProductById } from "@/app/actions/product"; 

export default function useProduct(id) {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            console.error("ID no disponible");
            setError("ID de producto no disponible.");
            setIsLoading(false);
            return;
        }

        const fetchProduct = async () => {
            try {
                const { payload, error } = await getProductById(id);
                if (error || !payload) {
                    setError("Producto no encontrado.");
                    setProduct(null);
                } else {
                    setProduct(payload); 
                }
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("Ocurrió un error al obtener el producto.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, isLoading, error };
}
