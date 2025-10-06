import Image from 'next/image';
import SiteNavbar from '../../../../components/SiteNavbar';
import SiteFooter from '../../../../components/SiteFooter';

type Product = {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  includes: string[];
};

const PRODUCTS: Product[] = [
  {
    id: 'ys-park-339',
    title: 'Y.S.Park 339',
    category: 'Accessories',
    price: 99,
    image: '/logo.png',
    description:
      'Classic Y.S.Park 339 comb suitable for precise haircuts. Lightweight and durable for daily professional use.',
    includes: ['Comb Y.S.Park 339'],
  },
  {
    id: 'full-set',
    title: 'Full Set',
    category: 'Accessories',
    price: 179,
    image: '/logo.png',
    description:
      'Set of a cover case for scissors, rings, bracelet and combs. Stainless steel details with magnets. Includes video instructions.',
    includes: [
      'Scissors case',
      'Comb Y.S.Park 332',
      'Comb Y.S.Park 339',
      'Comb Leader 125',
      'Razor',
      'Clips',
      'Bracelet',
      'Ring',
    ],
  },
  {
    id: 'no-leather-set',
    title: "Set for those who don't wear leather",
    category: 'Accessories',
    price: 119,
    image: '/logo.png',
    description:
      'Vegan-friendly set with synthetic materials. Perfect balance between functionality and style.',
    includes: ['Synthetic scissors case', 'Comb set', 'Clips', 'Bracelet', 'Ring'],
  },
  {
    id: 'red-set',
    title: 'Red set',
    category: 'Accessories',
    price: 109,
    image: '/logo.png',
    description: 'A vivid red themed set. Reliable tools packed in a compact case.',
    includes: ['Case', 'Comb', 'Clips'],
  },
  {
    id: 'blue-comb',
    title: 'Blue Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
    description: 'High precision comb designed for uniform tension and control.',
    includes: ['Comb'],
  },
  {
    id: 'orange-comb',
    title: 'Orange Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
    description: 'Durable comb with heat-resistant material for daily styling.',
    includes: ['Comb'],
  },
  {
    id: 'green-comb',
    title: 'Green Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
    description: 'Ergonomic design to reduce fatigue and improve accuracy.',
    includes: ['Comb'],
  },
  {
    id: 'bundle-starter',
    title: 'Starter Bundle',
    category: 'Bundles',
    price: 249,
    image: '/logo.png',
    description: 'All you need to start: essential combs and accessories in one kit.',
    includes: ['Essential combs', 'Clips', 'Case'],
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'sq'; id: string }>;
}) {
  const { id, locale } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      {!product ? (
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-2xl font-semibold text-white">Product not found</h1>
          <p className="mt-2 text-white/70">The product you are looking for does not exist.</p>
        </section>
      ) : (
        <>
          {/* Hero image */}
          <section className="mx-auto max-w-6xl px-6 pt-6 lg:px-8">
            <div className="relative w-full overflow-hidden rounded-lg bg-white">
              <div className="relative mx-auto aspect-[16/7] max-h-[60vh] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-white">Description</h2>
                <p className="mt-3 text-sm leading-6 text-white/80">{product.description}</p>
              </div>
              {/* Includes */}
              <div>
                <h2 className="text-xl font-semibold text-white">The set includes</h2>
                <ul className="mt-3 list-inside space-y-1 text-sm leading-6 text-white/80">
                  {product.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sticky add-to-cart bar mock */}
            <div className="mt-12 rounded-md border border-white/10 bg-black/30 p-4 text-white">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="text-xs tracking-[0.2em] text-white/50 uppercase">
                    {product.category}
                  </div>
                  <div className="text-lg font-medium text-white/90">{product.title}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-xl font-semibold">${product.price.toFixed(2)}</div>
                  <button className="rounded bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <SiteFooter />
    </main>
  );
}
