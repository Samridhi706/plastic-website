"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT : FORM */}
        <div className="h-[450px]">
          <h2 className="text-4xl font-bold text-[#0B3C5D] mb-9">
            Get In touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
                
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input
                type="tel"
                placeholder="Phone"
                className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
                required
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                />


              <input
                type="text"
                placeholder="Company"
                className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2 resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-[#0B3C5D] text-white px-10 py-3 font-semibold hover:bg-[#093257] transition"
            >
              SEND MESSAGE
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="flex items-center gap-2 text-green-600 font-medium">
                ✓ Your submission was successful.
              </p>
            )}
          </form>
        </div>

        {/* RIGHT : MAP */}
        <div className="w-full h-[300px] lg:h-[400px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.342019228198!2d77.0494120755069!3d28.798879975574287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ3JzU2LjAiTiA3N8KwMDMnMDcuMiJF!5e0!3m2!1sen!2sin!4v1765884121350!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-md"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
