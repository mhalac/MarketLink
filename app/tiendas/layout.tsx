import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "../globals.css";

const mukta = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Tiendas",
  description: "i dont know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
        <body className={mukta.className}>{children}</body>
      </html>
  );
}
