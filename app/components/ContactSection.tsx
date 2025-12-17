
"use client"

import ContactForm from "./ContactForm";

export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     setSubmitted(true);
//   };
    let submitted = false;
    function handleSubmit(e: React.FormEvent) {
        submitted = true;
        setTimeout(() => {
            submitted = false;
        }, 3000);
    }

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* LEFT : FORM */}
        <ContactForm />

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
