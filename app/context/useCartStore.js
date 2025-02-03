"use client";
import { create } from "zustand";

const useCartStore = create((set, get) => ({
    cart: [],


    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + product.quantity }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity: product.quantity }] };
        }),


    clearCart: () => set({ cart: [] }),

    removeItem: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),


    getTotalQuantity: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.quantity, 0);
    },

    // Obtener el precio total del carrito
    getTotalPrice: () => {
        const state = get();
        return state.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    },
}));

export default useCartStore;
