async function fetchProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Producto no encontrado');
    }
    const data = await response.json();
    return data;
}

export default async function ProductDetailPage({ params }) {
    const { id } = params;

    try {
        const product = await fetchProductById(id);

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