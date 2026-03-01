import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savy Home Tech | Auditoría de Ahorro para el Hogar",
  description: "Reducimos tus facturas de internet y servicios gestionando auditorías independientes del mercado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-violet-100`}>
        {children}
      </body>
    </html>
  );
}