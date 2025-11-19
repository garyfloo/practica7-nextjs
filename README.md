# Objetivos del capitulo
**El objetivo de este capítulo es implementar la estructura básica de páginas de un Dashboard utilizando el App Router de Next.js, y agregar un Navbar global que permita navegar entre las diferentes secciones sin recargar la página**
## Estructura creada en este capítulo.
**app/
├─ page.tsx                 → Página Home
├─ dashboard/
│   └─ page.tsx             → Panel principal
├─ clients/
│   └─ page.tsx             → Lista de clientes
├─ settings/
│   └─ page.tsx             → Página de configuración
└─ components/
    └─ Navbar.tsx           → Barra de navegación**

# Implementación del Navbar
**import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/clients">Clientes</Link>
      <Link href="/settings">Ajustes</Link>
    </nav>
  );
}**

# Integración del Navbar en el layout global
**import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Practica Next.js",
  description: "Dashboard creado para la práctica",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}**
