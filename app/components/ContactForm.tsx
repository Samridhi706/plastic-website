

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkqraww");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold text-lg">
        ✓ Your message has been sent successfully.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
        />
      </div>

      {/* Validation Error */}
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          maxLength={10}
          minLength={10}
          pattern="[0-9]{10}"
          inputMode="numeric"
          className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          className="border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full border-b border-gray-400 focus:outline-none focus:border-[#0B3C5D] py-2 resize-none"
      />

      {/* Validation Error */}
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      {/* Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#0B3C5D] text-white px-10 py-3 font-semibold
                   hover:bg-[#093257] transition disabled:opacity-50"
      >
        {state.submitting ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
