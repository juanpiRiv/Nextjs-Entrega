import { useEffect, useState } from "react";
import { getProducts } from "@app/actions/product";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getProducts();
            if (!response.error) {
                setProducts(response.payload);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} width={100} />
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    );
}
