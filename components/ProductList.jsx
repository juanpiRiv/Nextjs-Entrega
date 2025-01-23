import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '@/app/api/products/products';// Importar desde el archivo de utilidades

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts(category); // Usar función centralizada
                setProducts(data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [category]);

    if (loading) return <div>Cargando productos...</div>;

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
