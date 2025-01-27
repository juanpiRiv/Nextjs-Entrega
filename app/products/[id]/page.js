import { getProductById } from "@/app/actions/product";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductDetailPage({ params }) {
    // Asegúrate de que params esté resuelto antes de acceder a sus propiedades
    const { id } = await params; // Esperar los parámetros dinámicos

    // Obtenemos el producto en el servidor
    const product = await getProductById(id);

    if (!product) {
        return <h1>Producto no encontrado</h1>;
    }

    return <ProductDetail product={product} />;
}
