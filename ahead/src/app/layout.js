// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";

import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/ui/navbar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahead Group",
  description: "Ahead Group is an educational trust",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-[#FFFFF2]"
    >
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />

          {children}
          <Toaster />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
