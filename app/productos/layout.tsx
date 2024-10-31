import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";

const mukta = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "MarketLink",
  description: "Revisa el stock de tus productos favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cover h-[100vh] w-[100vw] flex justify-center background-landing flex-col items-center ">
      {children}
    </div>
  );
}
