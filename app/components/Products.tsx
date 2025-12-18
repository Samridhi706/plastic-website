import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function Products() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0B3C5D] mb-12">
          Plastic Scrap & Granules We Deal In
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(products).map(([slug, product]) => (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover
                             transition-transform duration-500
                             group-hover:scale-110"
                />

                {/* OPTIONAL OVERLAY */}
                <div
                  className="absolute inset-0 bg-black/20
                             opacity-0 transition-opacity duration-300
                             group-hover:opacity-100"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#0B3C5D] mb-2">
                  {product.title}
                </h3>
                <span className="inline-block mt-4 text-cyan-600 font-medium
                                 transition-transform duration-300
                                 group-hover:translate-x-1">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
