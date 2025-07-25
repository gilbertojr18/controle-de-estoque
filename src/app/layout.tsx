import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { title } from "process";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rute Acessórios",
  description: "Delicadeza e sofisticação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <nav className="w-full whitespace-nowrap bg-neutral-700 h-13 flex flex-row justify-items-start fixed z-50 font-bold top-0 left-0">
          <div className="container mx-auto flex justify-between items-center">
            <button className="bg-emerald-600 p-3 w-1/12 min-w-20   rounded-sm border-amber-50 text-center"><Link href={'/'}>Home </Link>  </button>

            <button className="bg-blend-luminosity p-3 ml-2 min-w-20 rounded-sm bg-amber-600   w-1/12 text-center "> <Link href={'/lacos'}> Laços </Link></button>
            <button className="bg-blend-luminosity p-3 ml-2 min-w-20  rounded-sm border-1  w-2.5/12  text-center whitespace-nowrap truncate"><Link href={'/estoque'}> Estoque de material</Link> </button>
            
            <button className="bg-red-600 p-3  w-1/12 border-1 min-w-20  rounded-sm text-center ml-auto mr-1">Sair</button>

          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
