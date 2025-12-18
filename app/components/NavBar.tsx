"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="RR logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-xl font-bold text-[#0B3C5D]">
              RR Enterprise&apos;s
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-[#0B3C5D]">

            <Link href="/" className="hover:text-cyan-600 transition">
              Home
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div className="relative group">
              <span className="cursor-pointer hover:text-cyan-600 transition">
                Products
              </span>

              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md
                           opacity-0 invisible group-hover:opacity-100 group-hover:visible
                           transition-all duration-200 z-50"
              >
                {Object.entries(products).map(([slug, product], index, arr) => (
                  <Link
                    key={slug}
                    href={`/products/${slug}`}
                    className={`block px-4 py-2 text-sm text-gray-700
                                hover:bg-cyan-50 hover:text-cyan-600
                                ${index !== arr.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* FIXED LINKS */}
            <Link href="/#about-us" className="hover:text-cyan-600 transition">
              About Us
            </Link>

            <Link href="/#contact-us" className="hover:text-cyan-600 transition">
              Contact Us
            </Link>
          </nav>

          {/* HAMBURGER */}
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

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => {
            setOpen(false);
            setProductOpen(false);
          }}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-16 right-4 w-64 bg-white z-50 shadow-xl rounded-lg
                    transform transition-all duration-300
                    ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {/* CLOSE */}
        <div className="flex justify-end px-3 py-2 border-b border-gray-200">
          <button
            onClick={() => {
              setOpen(false);
              setProductOpen(false);
            }}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* MENU ITEMS */}
        <nav className="flex flex-col text-base">

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b border-gray-200 hover:bg-cyan-50"
          >
            Home
          </Link>

          {/* PRODUCTS (MOBILE) */}
          <button
            onClick={() => setProductOpen(!productOpen)}
            className="px-4 py-3 text-left border-b border-gray-200
                       hover:bg-cyan-50 hover:text-cyan-600"
          >
            Products
          </button>

          {productOpen &&
            Object.entries(products).map(([slug, product], index, arr) => (
              <Link
                key={slug}
                href={`/products/${slug}`}
                onClick={() => {
                  setOpen(false);
                  setProductOpen(false);
                }}
                className={`pl-8 pr-4 py-2 text-sm
                            hover:bg-cyan-50 hover:text-cyan-600
                            ${index !== arr.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {product.title}
              </Link>
            ))}

          {/* FIXED LINKS */}
          <Link
            href="/#about-us"
            onClick={() => setOpen(false)}
            className="px-4 py-3 border-b border-gray-200 hover:bg-cyan-50"
          >
            About Us
          </Link>

          <Link
            href="/#contact-us"
            onClick={() => setOpen(false)}
            className="px-4 py-3 hover:bg-cyan-50"
          >
            Contact Us
          </Link>
        </nav>
      </aside>
    </>
  );
}
