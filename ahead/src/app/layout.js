// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";

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
      className="bg-gradient-to-b from-red-500 via-pink-600 to-indigo-800"
    >
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Navbar />

          {children}

          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
