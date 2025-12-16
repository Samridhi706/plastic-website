export default function Herosection() {
  return (
    <>
      <section className="relative w-full h-[400px] md:h-[450px]">
        
        {/* Background Image */}
        <img
          src="/image (5).jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover blur-[1px]"
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0B3C5D]/80" />

        {/* CENTER TEXT (Heading + Paragraph) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          {/* Main Heading */}
          <h1
            className="text-white text-5xl md:text-6xl font-extrabold mb-6 leading-tight
                       drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
          >
            RR Enterprise's
          </h1>

          {/* Subheading */}
          <p
            className="text-white text-lg md:text-xl max-w-2xl
                       drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            Deals in all Kind of Plastic Waste Scrap Granuals
          </p>
        </div>

        {/* CONTACT NOW BUTTON - Bottom Right Highlighted */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
          <a
            href="#contact"
            className="relative px-8 py-3 text-lg font-semibold
                       text-white
                       bg-gradient-to-r from-cyan-400 to-blue-500
                       rounded-md
                       shadow-[0_0_20px_rgba(56,189,248,0.6)]
                       hover:shadow-[0_0_35px_rgba(56,189,248,0.9)]
                       hover:scale-105
                       transition-all duration-300"
          >
            CONTACT NOW
          </a>
        </div>

      </section>
    </>
  );
}
