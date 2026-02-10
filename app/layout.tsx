import type { Metadata } from "next";
import { Inter,JetBrains_Mono  } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


const jet = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Protfolio - Korean Jesus",
  description: "I'm Korean Jesus. Welcome to my protfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${inter.className} ${jet.className} ${montserrat.className} antialiased leading-8 overflow dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
