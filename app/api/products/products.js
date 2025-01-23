const API_URL = 'https://dummyjson.com/products';

const cache = {}; // Objeto para almacenar en caché las respuestas

// Obtener todos los productos o filtrar por categoría
export async function fetchProducts(category) {
    const url = category ? `${API_URL}/category/${category}` : API_URL;

    if (cache[url]) {
        return cache[url]; // Si está en caché, reutilizar
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener productos');
    }

    const data = await response.json();
    cache[url] = data.products; // Guardar en caché
    return data.products;
}

// Obtener producto por ID
export async function fetchProductById(id) {
    const url = `${API_URL}/${id}`;

    if (cache[url]) {
        return cache[url]; // Si está en caché, reutilizar
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Producto no encontrado');
    }

    const product = await response.json();
    cache[url] = product; // Guardar en caché
    return product;
}