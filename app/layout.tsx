import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/sessionWrapper";

const mukta = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MarketLink",
  description: "Revisa el stock de tus productos favoritos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionWrapper>
      <html lang="es">
        <body className={mukta.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
