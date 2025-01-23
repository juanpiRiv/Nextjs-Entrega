import React from 'react';
import { fetchProductById } from '@/app/api/products/products'; // Importar desde el archivo de utilidades

export default async function ProductDetailPage({ params }) {
    const { id } = params;

    try {
        const product = await fetchProductById(id); // Usar función centralizada

        return (
            <div style={{ padding: '20px' }}>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>Precio:</strong> ${product.price}</p>
                <img
                    src={product.thumbnail || 'https://via.placeholder.com/150'}
                    alt={product.title || 'Producto'}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </div>
        );
    } catch (error) {
        return <h1>Producto no encontrado</h1>;
    }
}