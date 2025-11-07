// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
// Import the new Client Component Provider
import { ReduxProvider } from "@/components/providers/ReduxProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce Workshop", // Updated title
  description: "E-commerce project built with Next.js and Redux Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 1. Wrap the entire application body content with the ReduxProvider */}
        <ReduxProvider>
          <Header />
          {/* Children are the page components */}
          <main>{children}</main> 
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}