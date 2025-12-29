'use client';

import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import HeroSlider from '@/components/HeroSlider';
import { useTranslations } from 'next-intl';
import FadeInLeft from '@/components/FadeInLeft';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#181818]">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        ></div>
      </div>

      <aside className="fixed top-0 left-0 z-50 flex h-screen flex-col p-8 text-white">
        <FadeInLeft delay={0}>
          <div className="mb-12 flex justify-center lg:hidden">
            <Image src="/logo_white.svg" alt="Logo" width={210} height={210} priority />
          </div>
        </FadeInLeft>

        <nav className="mt-[-80px] flex flex-1 flex-col items-start justify-center space-y-12 text-sm">
          <FadeInLeft delay={0.1}>
            <div className="flex flex-col items-start">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {t('nav.about.label')}
              </span>
              <Link
                href="/about"
                className="mt-1 block text-5xl font-[100] transition-colors hover:text-gray-300"
              >
                {t('nav.about.title')}
              </Link>
            </div>
          </FadeInLeft>
          <FadeInLeft delay={0.2}>
            <div className="flex flex-col items-start">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {t('nav.services.label')}
              </span>
              <Link
                href="/services"
                className="mt-1 block text-5xl font-[100] transition-colors hover:text-gray-300"
              >
                {t('nav.services.title')}
              </Link>
            </div>
          </FadeInLeft>
          <FadeInLeft delay={0.3}>
            <div className="flex flex-col items-start">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {t('nav.gallery.label')}
              </span>
              <Link
                href="/gallery"
                className="mt-1 block text-5xl font-[100] transition-colors hover:text-gray-300"
              >
                {t('nav.gallery.title')}
              </Link>
            </div>
          </FadeInLeft>
          <FadeInLeft delay={0.4}>
            <div className="flex flex-col items-start">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                {t('nav.shop.label')}
              </span>
              <Link
                href="/haircare"
                className="mt-1 block text-5xl font-[100] transition-colors hover:text-gray-300"
              >
                {t('nav.shop.title')}
              </Link>
            </div>
          </FadeInLeft>
        </nav>

        <ul className="font- flex space-x-4">
          <li>
            <Link href="en">{t('language.en')}</Link>
          </li>
          <li>
            <Link href="sq">{t('language.sq')}</Link>
          </li>
        </ul>
      </aside>

      <main className="relative flex h-full items-center justify-center pl-0 lg:pl-64">
        <div className="relative container ml-auto flex h-full w-full min-w-full items-start justify-between">
          <div className="relative z-10 flex hidden h-[100vh] w-full flex-1 flex-col justify-center lg:block">
            <div className="pointer-events-none absolute top-1/2 -right-32 z-20 h-[100vh] -translate-y-1/2">
              <div className="relative h-[100vh] w-64">
                <Image
                  src="/slider-pattern.png"
                  alt="Pattern"
                  fill
                  className="hidden object-contain lg:block"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 md:left-[40%] lg:left-[34%] xl:left-[41%]">
            <div className="relative hidden opacity-80 md:scale-50 lg:block lg:scale-75 xl:scale-90 2xl:scale-100">
              <FadeIn delay={0.1}>
                <Image src="/logo_two.png" alt="Logo" width={450} height={450} priority />
              </FadeIn>
              <FadeIn delay={0.3}>
                <Image
                  className="ml-[200px]"
                  src="/logo_one.png"
                  alt="Logo"
                  width={450}
                  height={450}
                  priority
                />
              </FadeIn>
            </div>
          </div>

          <div className="relative flex h-full w-full flex-1 items-center justify-end lg:w-[60%]">
            <div className="relative h-[100vh] w-full max-w-2xl min-w-full">
              <HeroSlider />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
