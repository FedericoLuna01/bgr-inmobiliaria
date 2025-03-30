import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter(
  { subsets: ["latin"], variable: "--font-inter" }
)

export const metadata: Metadata = {
  title: "BGR Inmobiliaria",
  description: "Bienvenido a BGR Inmobiliaria, donde hacemos realidad tus sueños inmobiliarios. Explora nuestras propiedades y encuentra tu hogar ideal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-V8Y4VW6WJ3" />
    </html>
  );
}
