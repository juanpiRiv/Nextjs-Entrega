"use client";
import React, { useState, useEffect } from "react";
import HomePage from "@/components/Homepage";
import BoxPresentacion from "@/components/BoxPresentacion";
import Load from "@/components/Load";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Cambia el tiempo según sea necesario

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Load />;
  }

  return (
    <main>
      <BoxPresentacion />
      <HomePage />
    </main>
  );
}