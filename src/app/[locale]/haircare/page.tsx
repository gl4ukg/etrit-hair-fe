'use client';

import React from 'react';
import Image from 'next/image';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import { Link } from '../../../i18n/navigation';
import FadeInLeft from '@/components/FadeInLeft';
const products = [
  {
    id: 'ys-park-339',
    title: 'Y.S.Park 339',
    category: 'Accessories',
    price: 99,
    image: '/logo.png',
  },
  {
    id: 'full-set',
    title: 'Full Set',
    category: 'Accessories',
    price: 179,
    image: '/logo.png',
  },
  {
    id: 'no-leather-set',
    title: "Set for those who don't wear leather",
    category: 'Accessories',
    price: 119,
    image: '/logo.png',
  },
  {
    id: 'red-set',
    title: 'Red set',
    category: 'Accessories',
    price: 109,
    image: '/logo.png',
  },
  {
    id: 'blue-comb',
    title: 'Blue Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
  },
  {
    id: 'orange-comb',
    title: 'Orange Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
  },
  {
    id: 'green-comb',
    title: 'Green Comb',
    category: 'Accessories',
    price: 39,
    image: '/logo.png',
  },
  {
    id: 'bundle-starter',
    title: 'Starter Bundle',
    category: 'Bundles',
    price: 249,
    image: '/logo.png',
  },
];
export default async function ShopPage({ params }: { params: Promise<{ locale: 'en' | 'sq' }> }) {
  const { locale } = await params;

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, index) => (
            <FadeInLeft key={p.id} delay={index * 0.1}>
              <Link href={`/shop/${p.id}`} className="no-underline">
                <article className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                  <div className="relative aspect-square bg-white">
                    <Image src={p.image} alt={p.title} fill className="object-contain p-6" />
                  </div>
                  <div className="border-t border-white/10 bg-black/20 px-4 py-4 text-white">
                    <div className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                      {p.category}
                    </div>
                    <h3 className="mt-1 text-sm font-medium text-white/90">{p.title}</h3>
                    <div className="mt-3 font-semibold text-white">${p.price.toFixed(2)}</div>
                  </div>
                </article>
              </Link>
            </FadeInLeft>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
