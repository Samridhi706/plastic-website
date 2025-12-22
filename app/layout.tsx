import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RR Enterprise's",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "ZlAHeSCWIBqCuDa2cQb2nZSq6V9TkAp2qTYFonmdWmg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head><meta name="google-site-verification" content="ZlAHeSCWIBqCuDa2cQb2nZSq6V9TkAp2qTYFonmdWmg" /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
