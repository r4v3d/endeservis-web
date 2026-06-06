import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENDESERVIS | Muebles de Melamina y Tableros de Piedra Premium",
  description: "Especialistas en fabricación y venta de muebles de melamina y superficies de piedra natural (cuarzo, granito, mármol y piedra sinterizada) a medida en Lima, Perú. Más de 20 años de experiencia.",
  keywords: ["muebles de melamina Lima", "cocinas de melamina a medida", "encimeras de cuarzo Lima", "tableros de granito", "mármol para baños", "piedra sinterizada Lima"],
  authors: [{ name: "Endeservis" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-sans selection:bg-brand-gold selection:text-brand-text">
        {children}
      </body>
    </html>
  );
}
