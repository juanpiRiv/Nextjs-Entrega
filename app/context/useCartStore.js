import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [], // Estado inicial del carrito
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
    clearCart: () => set({ cart: [] }), // Limpiar el carrito
}));
export default useCartStore;