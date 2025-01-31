"use client";
import "@/app/globals.css";
import NavBar from "@/components/NavBar";
import "tailwindcss/tailwind.css";
import { metadata } from "@/app/metaData";
import Footer from "@/components/Footer";
import ThemeClient from "@/components/ThemeClient";
import Load from "@/components/Load";
import useAuthStore from "@/app/context/useAuthStore"; // Asegúrate de que la importación sea correcta
import { useState, useEffect } from "react";

metadata.title = "Create Next App";
metadata.description = "Generated by create next app";

export default function RootLayout({ children }) {
  const { loading, initAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAuth();
    setIsLoading(loading);
  }, [loading, initAuth]);

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <ThemeClient>
          <NavBar />
          <main className="flex-grow">
            {isLoading ? <Load /> : children}
          </main>
          <Footer />
        </ThemeClient>
      </body>
    </html>
  );
}