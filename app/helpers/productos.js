// /helpers/productos.js
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebase"; // Configuración de Firebase
 // Función para obtener productos desde la API

// Función para migrar los productos
export async function migrateProductsFromAPI() {
    const allowedCategories = ["laptops", "tablets", "mens-watches", "mobile-accessories"];
    const productsCollection = collection(db, "products");

    const failedMigrations = [];
    try {
        const promises = allowedCategories.map((category) => fetchProducts(category));
        const results = await Promise.all(promises);
        const allProducts = results.flat();

        for (const product of allProducts) {
            const productData = {
                title: product.title,
                description: product.description,
                price: product.price,
                category: product.category,
                thumbnail: product.thumbnail || "https://via.placeholder.com/300x200",
            };

            try {
                await addDoc(productsCollection, productData);
                console.log(`Producto "${product.title}" migrado correctamente.`);
            } catch (error) {
                failedMigrations.push({ product, error });
                console.error(`Error al migrar "${product.title}":`, error);
            }
        }

        console.log(`Migración completada. Fallaron ${failedMigrations.length} productos.`);
        if (failedMigrations.length) {
            console.error("Productos fallidos:", failedMigrations);
        }
    } catch (error) {
        console.error("Error general al migrar productos desde la API:", error);
    }
}
