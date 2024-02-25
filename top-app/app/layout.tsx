import type {Metadata} from "next";
import {Inter, Open_Sans} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});
const sans = Open_Sans({subsets: ["latin"]});
export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "MyTop - наш лучший топ",
        description: "Сайт для публикации топов",
    };
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
        <body className={sans.className}>{children}</body>
        </html>
    );
}
