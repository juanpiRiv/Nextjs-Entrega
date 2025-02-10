import "@/app/globals.css";
import Footer from "@/components/Footer";
import ThemeClient from "@/components/ThemeClient";
import EmotionProvider from "@/components/EmotionProvider";  // ✅ Agregar el EmotionProvider
import AuthProvider from "@/app/context/AuthProvider";
import NavBarClient from "@/components/NavBarClient"; 
import { metadata } from "./metaData";


export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />

                {/* Open Graph */}
                <meta property="og:title" content={metadata.openGraph.title} />
                <meta property="og:description" content={metadata.openGraph.description} />
                <meta property="og:type" content={metadata.openGraph.type} />

                {/* Twitter */}
                <meta name="twitter:card" content={metadata.twitter.card} />
                <meta name="twitter:title" content={metadata.twitter.title} />
                <meta name="twitter:description" content={metadata.twitter.description} />
            </head>
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
