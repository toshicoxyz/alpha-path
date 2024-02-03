import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camino Alfa",
  description: "Explora la transformación de Luna, un cachorro, en un lobo fuerte en este viaje interactivo. Atraviesa desafíos mágicos, conoce personajes del bosque y descubre el poder del crecimiento personal. Únete a Luna en esta experiencia cautivadora y descubre el rugido interior que todos llevamos dentro. 🌕🐺✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
