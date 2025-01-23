export default async function handler(req, res) {
    const { category } = req.query;

    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        let products = data.products;

        // Filtrar por categoría si se pasa en la URL
        if (category) {
            products = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }

        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener productos desde DummyJSON:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
}
