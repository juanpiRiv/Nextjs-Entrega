"use client";
import { create } from "zustand";
import { auth, db } from "@/services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
    user: null,
    role: null,
    loading: true,
    isClient: false, 

    initAuth: () => {
        if (typeof window !== "undefined") {
            set({ isClient: true }); 
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userRef = doc(db, "users", user.uid);
                    const userDoc = await getDoc(userRef);
                    const role = userDoc.exists() ? userDoc.data().role : "user"; 
                    set({ user, role, loading: false });
                } else {
                    set({ user: null, role: null, loading: false });
                }
            });
        }
    },

    logout: async () => {
        await signOut(auth);
        set({ user: null, role: null });
    },
}));

export default useAuthStore;