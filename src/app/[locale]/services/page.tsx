'use client';
import { useState } from 'react';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import Testimonials from '../../../components/Testimonials';

export default function ServicesPage({ params }: { params: { locale: 'en' | 'sq' } }) {
  const tabs = [
    {
      key: 'haircuts',
      label: 'Haircuts',
      items: [
        { name: 'Short Length', price: 40 },
        { name: 'Medium Length', price: 55 },
        { name: 'Long Length', price: 70 },
        { name: 'Children cut', price: 35 },
        { name: 'Men cut', price: 40 },
      ],
      images: ['/about/IMG_5071.jpeg', '/about/IMG_5073.jpeg'],
    },
    {
      key: 'hairstyling',
      label: 'Hairstyling',
      items: [
        { name: 'Blowout & Style', price: 25 },
        { name: 'Updo / Event', price: 45 },
        { name: 'Waves / Texture', price: 30 },
      ],
      images: ['/about/IMG_5074.jpeg', '/about/IMG_5804.jpeg'],
    },
    {
      key: 'haircare',
      label: 'Hair Care',
      items: [
        { name: 'Repair Treatment', price: 35 },
        { name: 'Scalp Detox', price: 30 },
        { name: 'Moisture Mask', price: 25 },
      ],
      images: ['/about/IMG_5805.jpeg', '/about/IMG_5071.jpeg'],
    },
  ];

  const [active, setActive] = useState<string>(tabs[0].key);
  const current = tabs.find((t) => t.key === active)!;

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={params.locale} />

      {/* Hero section */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-8 pb-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr]">
          {/* Left: headline */}
          <div>
            <h1 className="text-4xl leading-tight font-light text-white sm:text-5xl">
              Let Your
              <br />
              Hair Shine
            </h1>
            <p className="mt-4 max-w-prose text-sm leading-6 text-white/70">
              From cuts to care, we provide expert hair services designed just for you. Elevate your
              look with our studio.
            </p>
            <div className="mt-6">
              <a
                href="#services"
                className="rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black no-underline hover:bg-white"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right: two feature images */}
          <div className="grid grid-cols-2 items-start gap-6">
            <div className="aspect-square rounded-3xl bg-white/5 p-2 backdrop-blur">
              <div className="h-full w-full rounded-2xl bg-[url('/about/IMG_5073.jpeg')] bg-cover bg-center" />
            </div>
            <div className="aspect-[4/5] rounded-3xl bg-white/5 p-2 backdrop-blur">
              <div className="h-full w-full rounded-2xl bg-[url('/about/IMG_5805.jpeg')] bg-cover bg-center" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white">
            <div className="text-2xl font-semibold">10+</div>
            <div className="text-xs text-white/70">Years of Excellence</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white">
            <div className="text-2xl font-semibold">500+</div>
            <div className="text-xs text-white/70">Loyal Clients</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-white">
            <div className="text-2xl font-semibold">4.9/5</div>
            <div className="text-xs text-white/70">Rating on Google</div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      <section id="services" className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
        {/* Soft gradient background block */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/5 to-white/0" />

        <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-4">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                'rounded-full px-4 py-1.5 text-sm transition-colors ' +
                (active === t.key
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20')
              }
              type="button"
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr]">
          {/* Price list card */}
          <div className="rounded-2xl border border-white/15 bg-black/20 p-4 text-white">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <table className="w-full text-left text-sm">
                <tbody>
                  {current.items.map((it) => (
                    <tr key={it.name} className="border-b border-white/10 last:border-0">
                      <td className="px-4 py-3">{it.name}</td>
                      <td className="px-4 py-3 text-right font-medium">${it.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Showcase images */}
          <div className="grid grid-cols-2 gap-6">
            {current.images.map((src) => (
              <div key={src} className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#booking"
            className="rounded-full bg-white/90 px-8 py-3 text-sm font-medium text-black no-underline hover:bg-white"
          >
            Book a call
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        items={[
          {
            id: 't1',
            name: 'Sophie M.',
            date: '12.09.2024',
            text:
              'Amazing experience! The staff really listens to what you want and gives great advice on maintaining healthy hair. I will definitely be coming back.',
            avatarUrl: '/about/IMG_5071.jpeg',
          },
          {
            id: 't2',
            name: 'Ann J.',
            date: '08.08.2024',
            text:
              "I’m beyond happy with my new hairstyle! The team made sure I felt comfortable and left with exactly what I wanted.",
            avatarUrl: '/about/IMG_5073.jpeg',
          },
          {
            id: 't3',
            name: 'Amanda L.',
            date: '17.04.2024',
            text: 'Visited for the first time and was blown away by the results! Fabulous service!',
            avatarUrl: '/about/IMG_5074.jpeg',
          },
        ]}
      />

      <SiteFooter />
    </main>
  );
}
