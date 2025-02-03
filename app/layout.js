import "@/app/globals.css";
import Footer from "@/components/Footer";
import ThemeClient from "@/components/ThemeClient";
import EmotionProvider from "@/components/EmotionProvider";  // ✅ Agregar el EmotionProvider
import AuthProvider from "@/app/context/AuthProvider";
import NavBarClient from "@/components/NavBarClient"; 

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="flex flex-col min-h-screen">
                <EmotionProvider>  {/* ✅ Envuelve toda la app */}
                    <ThemeClient>
                        <AuthProvider>
                            <NavBarClient />
                            <main className="flex-grow">{children}</main>
                            <Footer />
                        </AuthProvider>
                    </ThemeClient>
                </EmotionProvider>
            </body>
        </html>
    );
}
