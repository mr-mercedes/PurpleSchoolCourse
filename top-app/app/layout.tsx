import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import styles from './Home.module.css';
import React from "react";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "MyTop - наш лучший топ",
        description: "Сайт для публикации топов",
    }
}

const RootLayout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ru">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}

export default RootLayout;