"use client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/services/firebase";

export default function Logout() {
    const router = useRouter();

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/auth/login"); // Redirige al login después de cerrar sesión
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white p-2">
            Cerrar Sesión
        </button>
    );
}
