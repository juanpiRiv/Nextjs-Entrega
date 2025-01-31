"use client";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import useAuthStore from "@/app/context/useAuthStore";
import { useRouter } from "next/navigation";
import { Box, Typography, Button, IconButton, Snackbar, Alert } from "@mui/material";

export default function Dashboard() {
    const { user, role, loading, isClient } = useAuthStore();
    const router = useRouter();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (isClient && !loading && (!user || role !== "admin")) {
            router.push("/");
        } else if (isClient && user && role === "admin") {
            fetchProducts();
            fetchCategories();
        }
    }, [user, role, loading, isClient]);

    // 🔹 Obtener productos desde Firestore
    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    // 🔹 Obtener categorías existentes
    const fetchCategories = async () => {
        const querySnapshot = await getDocs(collection(db, "categories"));
        setCategories(querySnapshot.docs.map((doc) => doc.data().name));
    };

    // 🔹 Agregar una nueva categoría si no existe
    const addCategoryIfNotExists = async (categoryName) => {
        if (!categories.includes(categoryName)) {
            await addDoc(collection(db, "categories"), { name: categoryName });
            setCategories([...categories, categoryName]);
        }
    };

    // 🔹 Agregar producto y verificar categoría
    const addProduct = async () => {
        if (!title || !price || !description || !category || !thumbnail) {
            alert("Todos los campos son obligatorios");
            return;
        }

        await addCategoryIfNotExists(category); // 🔹 Si la categoría no existe, la agrega

        await addDoc(collection(db, "products"), { title, price, description, category, thumbnail });

        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setThumbnail("");
        fetchProducts();
    };

    // 🔹 Eliminar producto
    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "products", id));
        fetchProducts();
    };

    if (!isClient || loading) return <p className="text-white">Cargando...</p>;
    if (!user || role !== "admin") return null;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>

            {/* Agregar producto */}
            <div className="bg-background p-4 rounded shadow-md mb-6">
                <h2 className="text-lg font-bold mb-2">Agregar Producto</h2>
                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full mb-2 text-black"
                />
                <input
                    type="number"
                    placeholder="Precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border p-2 w-full mb-2 text-black"
                />
                <input
                    type="text"
                    placeholder="Categoría"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 w-full mb-2 text-black"
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 w-full mb-2 text-black"
                />
                <input
                    type="text"
                    placeholder="URL de la imagen"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    className="border p-2 w-full mb-2 text-black"
                />
                <Button onClick={addProduct} 
                className="font-bold tracking-tighter"
                variant="outlined"
                color="primary"
                sx={{ width: "100%" }}
            >
                    Agregar
                </Button>
            </div>

            {/* Lista de productos */}
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="flex items-center justify-between bg-background p-4 rounded shadow-md">
                        <div className="flex items-center space-x-4">
                            <img src={product.thumbnail} alt={product.title} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.category}</p>
                                <p className="text-sm text-gray-700">{product.description}</p>
                                <p className="text-lg font-bold">${product.price}</p>
                            </div>
                        </div>
                        <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-700">
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
