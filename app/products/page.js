'use client';
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
        throw new Error('Error al obtener los productos');
    }
    const data = await response.json();
    return data.products;
}

export default function ProductsPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };

        getProducts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />  
                ))}
            </div>
        </div>
    );
}
