import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MuscleFlex",
  description: "App that generates your workout based on your goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} h-[100vh] grid grid-rows-[0.1fr_1fr] bg-gradient-radial bg-cover bg-background text-primary bg-no-repeat `}
      >
        <Header />
        <main className="flex flex-col justify-center items-center md:grid md:grid-cols-2">
          {children}
        </main>
      </body>
    </html>
  );
}
