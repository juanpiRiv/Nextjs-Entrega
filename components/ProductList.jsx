import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const url = category 
                ? `https://dummyjson.com/products/category/${category}` 
                : 'https://dummyjson.com/products';
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data.products || []);
            setLoading(false);
        };

        fetchProducts();
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