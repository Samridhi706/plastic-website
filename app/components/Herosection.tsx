"use client";

import { useState, useRef, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Herosection() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        {/* Background */}
        <img
          src="/image.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover blur-[1px]"
        />
        <div className="absolute inset-0 bg-[#0B3C5D]/80" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6">
            RR Enterprise's
          </h1>

          <p className="text-white text-lg md:text-xl max-w-2xl">
            Deals in all Kind of Plastic Waste Scrap Granules
          </p>
        </div>

        {/* CONTACT ACTION MENU */}
        <div
          ref={wrapperRef}
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10"
        >
          {open && (
            <div className="absolute bottom-full right-0 mb-4 flex flex-col gap-3 z-50">
              <a
                href="tel:+917357445283"
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-md shadow-md hover:bg-cyan-100"
              >
                <FiPhone className="text-cyan-600 text-xl" />
                Call
              </a>

              <a
                href="https://wa.me/+917357445283"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-md shadow-md hover:bg-green-100"
              >
                <FaWhatsapp className="text-green-500 text-xl" />
                WhatsApp
              </a>

              <a
                href="mailto:arunrrenterprises.09@gmail.com"
                className="flex items-center gap-3 px-4 py-2 bg-white rounded-md shadow-md hover:bg-cyan-100"
              >
                <FiMail className="text-cyan-600 text-xl" />
                Email
              </a>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="px-8 py-3 text-lg font-semibold text-white
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       rounded-md shadow-lg
                       hover:scale-105 transition-all duration-300"
          >
            CONTACT NOW
          </button>
        </div>
      </section>

    {/* STATIC ADDRESS BAR */}
{/* SMALL STATIC ADDRESS BAR */}
<section className="w-full bg-[#0B3C5D]">
  <div className="max-w-7xl mx-auto px-4 py-2 text-left text-white text-sm md:text-base font-medium">
    📍 <span className="font-semibold">Address:</span>
    &nbsp;Plot No.129, Ground Floor, Sector 2, Block-i, Bawana Industrial Area, Delhi-110039, India
  </div>
</section>



      
    </>
  );
}
