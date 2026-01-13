import React from 'react';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import FadeInLeft from '@/components/FadeInLeft';
import { getTranslations } from 'next-intl/server';
import HaircareTabs from '@/components/HaircareTabs';

export default async function HaircarePage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'sq' }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HaircarePage' });

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <SiteNavbar locale={locale} />

      <section className="relative bg-black py-20 sm:py-24 lg:py-28">
        {/* <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,rgba(0,0,0,0)_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_70%)]" />
        </div> */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0.0)_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-black/30" />

        <div className="relative mx-auto w-full max-w-6xl px-4">
          <FadeInLeft delay={0.05}>
            <header className="mx-auto max-w-3xl text-left">
              <p className="text-[12px] tracking-[0.25em] text-zinc-400 uppercase">
                {t('hero.kicker')}
              </p>
              <h1 className="mt-3 text-5xl font-normal tracking-tight text-white sm:text-6xl lg:text-7xl">
                {t('hero.title')}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {t('hero.subtitle')}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                {t('hero.intro')}
              </p>
            </header>
          </FadeInLeft>

          <FadeInLeft delay={0.15}>
            <HaircareTabs
              tabLabels={{
                before: t('tabs.before'),
                after: t('tabs.after'),
                products: t('tabs.products'),
              }}
              before={{
                title: t('before.title'),
                sections: [
                  { title: t('before.consultation.title'), body: t('before.consultation.body') },
                  { title: t('before.time.title'), body: t('before.time.body') },
                  { title: t('before.pricing.title'), body: t('before.pricing.body') },
                ],
                note: t('before.note'),
              }}
              after={{
                title: t('after.title'),
                quote: t('after.intro.quote'),
                body: t('after.intro.body'),
                careTitle: t('after.care.title'),
                careItems: [
                  t('after.care.items.i1'),
                  t('after.care.items.i2'),
                  t('after.care.items.i3'),
                  t('after.care.items.i4'),
                  t('after.care.items.i5'),
                  t('after.care.items.i6'),
                ],
              }}
              products={{
                heading: t('products.heading'),
                subheading: t('products.subheading'),
                brands: {
                  back: t('products.brands.back'),
                  items: [
                    {
                      key: 'nashi',
                      title: t('products.brands.items.nashi.title'),
                      coverImageSrc: '/haircare/nashi-shampoo.png',
                      products: [
                        {
                          imageSrc: '/haircare/nashi-shampoo.png',
                          title: t('products.brands.items.nashi.products.shampoo.title'),
                          price: t('products.brands.items.nashi.products.shampoo.price'),
                          description: t(
                            'products.brands.items.nashi.products.shampoo.description',
                          ),
                        },
                        {
                          imageSrc: '/haircare/Hair-Conditioner-200ml.png',
                          title: t('products.brands.items.nashi.products.conditioner.title'),
                          price: t('products.brands.items.nashi.products.conditioner.price'),
                          description: t(
                            'products.brands.items.nashi.products.conditioner.description',
                          ),
                        },
                        {
                          imageSrc: '/haircare/Hair-Deep-Infusion-150ml-3.png',
                          title: t('products.brands.items.nashi.products.deepInfusion.title'),
                          price: t('products.brands.items.nashi.products.deepInfusion.price'),
                          description: t(
                            'products.brands.items.nashi.products.deepInfusion.description',
                          ),
                        },
                      ],
                    },
                    {
                      key: 'olaplex',
                      title: t('products.brands.items.olaplex.title'),
                      coverImageSrc: '/haircare/olaplex-hair-perfector.png',
                      products: [
                        {
                          imageSrc: '/haircare/olaplex-hair-perfector.png',
                          title: t('products.brands.items.olaplex.products.no3.title'),
                          price: t('products.brands.items.olaplex.products.no3.price'),
                          description: t('products.brands.items.olaplex.products.no3.description'),
                        },
                        {
                          imageSrc: '/haircare/intensivebond.png',
                          title: t('products.brands.items.olaplex.products.no0.title'),
                          price: t('products.brands.items.olaplex.products.no0.price'),
                          description: t('products.brands.items.olaplex.products.no0.description'),
                        },
                      ],
                    },
                    {
                      key: 'k18',
                      title: t('products.brands.items.k18.title'),
                      coverImageSrc: '/haircare/k18hairmask.png',
                      products: [
                        {
                          imageSrc: '/haircare/k18hairmask.png',
                          title: t('products.brands.items.k18.products.mask.title'),
                          price: t('products.brands.items.k18.products.mask.price'),
                          description: t('products.brands.items.k18.products.mask.description'),
                        },
                        {
                          imageSrc: '/haircare/k18hairoil.png',
                          title: t('products.brands.items.k18.products.oil.title'),
                          price: t('products.brands.items.k18.products.oil.price'),
                          description: t('products.brands.items.k18.products.oil.description'),
                        },
                      ],
                    },
                  ],
                },
              }}
            />
          </FadeInLeft>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
