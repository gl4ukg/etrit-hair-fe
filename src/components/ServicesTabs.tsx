"use client";
import { useState } from 'react';

export type ServiceTab = {
  key: string;
  label: string;
  items: { name: string; price: number }[];
  images: string[];
};

export default function ServicesTabs({ tabs }: { tabs: ServiceTab[] }) {
  const [active, setActive] = useState<string>(tabs[0]?.key ?? '');
  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  if (!current) return null;

  return (
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
              (active === t.key ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20')
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
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a href="#booking" className="rounded-full bg-white/90 px-8 py-3 text-sm font-medium text-black no-underline hover:bg-white">
          Book a call
        </a>
      </div>
    </section>
  );
}
