import type { Metadata } from "next";

// CSS
import "./globals.css";

// FONTS
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Invoice generator",
  description: "GPT3 -> AI Invoice generator",
};

// Componnets
import StarFieldBackground from "@/components/StarFieldBackground";
import FlashlightBackground from "@/components/InvoicePrompt";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-screen w-full">
          <StarFieldBackground />
          <div className="w-full h-full relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
