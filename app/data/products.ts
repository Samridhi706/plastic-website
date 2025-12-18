export type Product = {
  title: string;
  short: string;
  description: string;
  image: string;
};

export const products = {
  "hdpe-granules": {
    title: "HDPE Natural Granules",

    description:
      "High-quality HDPE Natural granules produced from recycled plastic, known for their strength, durability, and consistent quality. Widely used in molding and extrusion applications.",
    image: "/products/Image (16).jpg",
  },

  "pp-granules": {
    title: "PP Granules",
    
    description:
      "Reprocessed polypropylene granules offering excellent flexibility, chemical resistance, and thermal stability. Suitable for manufacturing household items, automotive parts, and packaging products.",
    image: "/products/Image (8).jpg",
  },

  "cp-granules": {
    title: "CP Granules",
    
    description:
      "CP granules are manufactured from recycled copolymer plastic, providing good impact strength and toughness. Commonly used in injection molding and industrial components.",
    image: "/products/Image (6).jpg",
  },

  "plastic-waste-scrap": {
    title: "HDPE Black Granules",
    description:
      "Durable HDPE black granules made from recycled material, offering high strength and UV resistance. Ideal for pipes, containers, and industrial plastic products.",
    image: "/products/Image (15).jpg",
  },

  "abs-granules": {
    title: "HDPE Grey Granules",
    
    description:
      "HDPE grey granules with uniform texture and reliable performance, suitable for manufacturing crates, bins, and molded plastic items.",
    image: "/products/Image (10).jpg",
  },

  "ldpe-granules": {
    title: "HDPE Red Granules",
    
    description:
      "Color-rich HDPE red granules produced for applications where appearance and strength are important. Commonly used in consumer and industrial plastic products.",
    image: "/products/Image (17).jpg",
  },

  "pp-black-granules": {
    title: "HDPE Green Granules",
    
    description:
      "HDPE green granules offering excellent durability and color consistency, widely used in molded items, household products, and utility components.",
    image: "/products/Image (18).jpg",
  },

  "milky-granules": {
    title: "HDPE Yellow Granules",
    
    description:
      "Bright and durable HDPE yellow granules manufactured for high-visibility plastic products, ensuring strength and long-lasting color.",
    image: "/products/Image (13).jpg",
  },

  "natural-granules": {
    title: "HDPE Blue Granules",
    
    description:
      "Premium HDPE blue granules with consistent quality and smooth finish, suitable for a wide range of injection molding and extrusion applications.",
    image: "/products/Image (14).jpg",
  },
} as const;

export type ProductSlug = keyof typeof products;
