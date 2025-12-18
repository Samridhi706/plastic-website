import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-white px-6 pt-28 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-4">
            Our Recycling Process
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We follow a systematic and quality-driven recycling process to
            transform plastic waste into high-quality reusable granules.
          </p>
        </div>

        {/* STEP 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full max-w-md mx-auto h-64 md:h-72">
            <Image
              src="/grind.png"
              alt="Plastic grinding process"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              1. Grinding Plastic Waste
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Plastic waste is collected and processed using advanced industrial
              grinding machines. These machines break down the material into
              smaller, manageable pieces, making it suitable for further
              processing while maintaining material integrity.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="md:order-2 relative w-full max-w-md mx-auto h-64 md:h-72">
            <Image
              src="/crush.jpg"
              alt="Crushing plastic into flakes"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="md:order-1">
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              2. Crushing into Flakes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The ground plastic is further crushed into flakes of mixed colors
              and sizes. This stage prepares the material for efficient sorting
              and ensures uniformity for high-quality output.
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative w-full max-w-md mx-auto h-64 md:h-72">
            <Image
              src="/sortinggg.webp"
              alt="Sorting plastic flakes"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              3. Sorting & Quality Check
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Crushed plastic flakes are carefully sorted based on material type
              and quality. Impurities are removed, ensuring consistency and
              reliability before the granulation process.
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 relative w-full max-w-md mx-auto h-64 md:h-72">
            <Image
              src="/Granulas.jpg"
              alt="Plastic granulation process"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="md:order-1">
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">
              4. Granulation & Molding
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The sorted plastic material is processed into uniform plastic
              granules. These granules are ready for reuse in manufacturing
              applications such as molding, extrusion, and other industrial
              processes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
