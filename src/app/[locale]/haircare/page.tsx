import React from 'react';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import FadeInLeft from '@/components/FadeInLeft';
import { getTranslations } from 'next-intl/server';

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

      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4">
          <FadeInLeft delay={0.05}>
            <header className="max-w-3xl">
              <p className="text-[12px] tracking-[0.25em] text-zinc-400 uppercase">
                {t('hero.kicker')}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                {t('hero.subtitle')}
              </p>
            </header>
          </FadeInLeft>

          <div className="mt-10 h-px w-full bg-white/10" />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeInLeft delay={0.1}>
              <section className="space-y-8 text-sm leading-relaxed text-zinc-300">
                <h2 className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                  {t('before.title')}
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t('before.consultation.title')}
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">{t('before.consultation.body')}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">{t('before.time.title')}</p>
                    <p className="mt-1 text-sm text-zinc-300">{t('before.time.body')}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">{t('before.pricing.title')}</p>
                    <p className="mt-1 text-sm text-zinc-300">{t('before.pricing.body')}</p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-zinc-400 sm:text-sm">{t('before.note')}</p>
              </section>
            </FadeInLeft>

            <FadeInLeft delay={0.2}>
              <section className="space-y-8 text-sm leading-relaxed text-zinc-300">
                <h2 className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
                  {t('after.title')}
                </h2>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-white italic">{t('after.intro.quote')}</p>
                    <p className="mt-1 text-sm text-zinc-300">{t('after.intro.body')}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">{t('after.care.title')}</p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                      <li>{t('after.care.items.i1')}</li>
                      <li>{t('after.care.items.i2')}</li>
                      <li>{t('after.care.items.i3')}</li>
                      <li>{t('after.care.items.i4')}</li>
                      <li>{t('after.care.items.i5')}</li>
                      <li>{t('after.care.items.i6')}</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-sm font-semibold text-white">{t('after.productCare.title')}</p>
                  <p className="mt-1 text-sm text-zinc-300">{t('after.productCare.body')}</p>
                  <p className="mt-3 text-2xl font-medium text-zinc-100">
                    {t('after.productCare.brands')}
                  </p>
                </div>
              </section>
            </FadeInLeft>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
