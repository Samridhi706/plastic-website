import Image from "next/image";
import { products } from "@/app/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <section className="pt-28 px-6">
        <p className="text-red-600">Product not found</p>
      </section>
    );
  }

  return (
    <section className="px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative h-72 md:h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#0B3C5D] mb-6">
            {product.title}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <a
            href={`https://wa.me/917357445283?text=Hello, I am interested in ${product.title}`}
            target="_blank"
            className="inline-block bg-[#0B3C5D] text-white px-8 py-3 font-semibold rounded-md hover:bg-[#093257] transition"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
}
