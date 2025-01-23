'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/app/api/products/products'; // Importar desde el archivo de utilidades

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(); // Usar función centralizada
                setProducts(data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) return <div>Cargando productos...</div>;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
