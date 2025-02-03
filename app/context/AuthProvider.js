"use client";
import { useState, useEffect } from "react";
import useAuthStore from "./useAuthStore";
import Load from "@/components/Load";

export default function AuthProvider({ children }) {
    const { loading, initAuth } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        initAuth();
        setIsLoading(loading);
    }, [loading, initAuth]);

    return isLoading ? <Load /> : children;
}