import { useEffect } from "react";
import { migrateProductsFromAPI } from "@/app/actions/products";

export default function MigrateProductsPage() {
    useEffect(() => {
        migrateProductsFromAPI();
    }, []);

    return <div>Migrando productos, revisa la consola para más detalles.</div>;
}
