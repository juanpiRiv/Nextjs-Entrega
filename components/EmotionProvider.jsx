"use client"; 
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/app/emotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({ children, emotionCache = clientSideEmotionCache }) {
    return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}