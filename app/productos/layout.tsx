import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import NavBar from "../ui/nav_bar";

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
        <div className="bg-cover h-[100vh] w-[100vw] flex justify-center background-landing flex-col items-center ">
          <NavBar />
          {children}
        </div>
    </html>
  );
}
