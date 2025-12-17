"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="RR logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-xl font-bold text-[#0B3C5D]">
              RR Enterprise's
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[#0B3C5D]">
            <Link className="hover:text-cyan-600 transition" href="/">Home</Link>
            <Link className="hover:text-cyan-600 transition" href="/products">Products</Link>
            <Link className="hover:text-cyan-600 transition" href="#AboutUs">About Us</Link>
            <Link className="hover:text-cyan-600 transition" href="#contact-us">Contact Us</Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* COMPACT MENU CARD */}
      <aside
        className={`fixed top-16 right-4 w-56 bg-white z-50 shadow-xl rounded-lg
                    transform transition-all duration-300
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {/* Close */}
        <div className="flex justify-end px-3 py-2 border-b border-gray-200">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Menu Items (Hover Highlight) */}
        <nav className="flex flex-col text-base">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "#AboutUs", label: "About Us" },
            { href: "#contact-us", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-b border-gray-300
                         hover:bg-cyan-50 hover:text-cyan-600
                         hover:border-l-4 hover:border-l-cyan-600
                         transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
