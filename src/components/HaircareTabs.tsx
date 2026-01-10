'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  tabLabels: {
    before: string;
    after: string;
    products: string;
  };
  before: {
    title: string;
    sections: Array<{ title: string; body: string }>;
    note: string;
  };
  after: {
    title: string;
    quote: string;
    body: string;
    careTitle: string;
    careItems: string[];
  };
  products: {
    heading: string;
    subheading: string;
    brands: {
      back: string;
      items: Array<{
        key: 'nashi' | 'olaplex' | 'k18';
        title: string;
        coverImageSrc?: string;
        products?: Array<{
          imageSrc: string;
          title: string;
          description: string;
        }>;
      }>;
    };
  };
};

type TabKey = 'before' | 'after' | 'products';

export default function HaircareTabs({ tabLabels, before, after, products }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('before');
  const [activeBrand, setActiveBrand] = useState<'nashi' | 'olaplex' | 'k18' | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const setHash = (tab: TabKey) => {
    if (typeof window === 'undefined') return;
    const next = `#${tab}`;
    if (window.location.hash === next) return;
    window.history.replaceState(null, '', next);
  };

  const scrollToPanel = () => {
    const el = panelRef.current;
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const selectTab = (tab: TabKey, opts?: { syncHash?: boolean; scroll?: boolean }) => {
    setActiveTab(tab);
    if (tab !== 'products') {
      setActiveBrand(null);
    }
    if (opts?.syncHash) setHash(tab);
    if (opts?.scroll) {
      requestAnimationFrame(() => scrollToPanel());
    }
  };

  useEffect(() => {
    const fromHash = () => {
      const raw = window.location.hash.replace('#', '').toLowerCase();
      if (raw === 'before' || raw === 'after' || raw === 'products') {
        selectTab(raw as TabKey, { scroll: true });
      }
    };

    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  const content = useMemo(() => {
    if (activeTab === 'before') {
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {before.title}
            </h2>
          </div>

          <div className="space-y-5">
            {before.sections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold text-white">{section.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300 md:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <p className="pt-2 text-xs leading-relaxed text-zinc-400 md:text-sm">{before.note}</p>
        </div>
      );
    }

    if (activeTab === 'after') {
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
              {after.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              <span className="text-white italic">{after.quote}</span>
              <span className="text-zinc-300"> {after.body}</span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{after.careTitle}</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {after.careItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    const brands = products.brands.items;
    const selected = activeBrand ? brands.find((b) => b.key === activeBrand) : null;

    if (!selected) {
      return (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
              {products.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              {products.subheading}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {brands.map((brand) => (
              <button
                key={brand.key}
                type="button"
                onClick={() => setActiveBrand(brand.key)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left shadow-[0_18px_60px_rgba(0,0,0,0.55)] transition hover:border-white/20"
              >
                <div className="relative aspect-[4/5] w-full">
                  {brand.coverImageSrc ? (
                    <Image
                      src={brand.coverImageSrc}
                      alt={brand.title}
                      fill
                      className="object-contain p-3 opacity-95 transition duration-300 group-hover:scale-[1.03] md:p-4"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-black/20">
                      <span className="text-3xl font-semibold tracking-tight text-white">
                        {brand.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-lg font-medium text-white">{brand.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            {selected.title}
          </h2>
          <button
            type="button"
            onClick={() => setActiveBrand(null)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-zinc-200 uppercase transition hover:border-white/20 hover:text-white"
          >
            {products.brands.back}
          </button>
        </div>

        {selected.products?.length ? (
          <div className="space-y-6">
            {selected.products.map((p) => (
              <div
                key={p.title}
                className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-[220px_1fr] md:p-6"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl bg-black/10">
                  <Image
                    src={p.imageSrc}
                    alt={p.title}
                    fill
                    className="scale-[1.08] object-contain p-4"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-zinc-300">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-zinc-300">{products.subheading}</p>
        )}
      </div>
    );
  }, [activeBrand, activeTab, after, before, products]);

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl">
      <div
        ref={panelRef}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
      >
        <div className="grid grid-cols-3 border-b border-white/10">
          <button
            type="button"
            onClick={() => selectTab('before', { syncHash: true, scroll: true })}
            className={`py-4 text-sm font-medium transition-colors ${
              activeTab === 'before'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.before}
          </button>
          <button
            type="button"
            onClick={() => selectTab('after', { syncHash: true, scroll: true })}
            className={`py-4 text-sm font-medium transition-colors ${
              activeTab === 'after'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.after}
          </button>
          <button
            type="button"
            onClick={() => selectTab('products', { syncHash: true, scroll: true })}
            className={`py-4 text-sm font-medium transition-colors ${
              activeTab === 'products'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.products}
          </button>
        </div>
        <div className="relative px-6 pt-10 pb-8 md:px-10">
          <p className="mb-4 text-center text-[10px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
            CARE
          </p>
          {content}
        </div>
      </div>
    </div>
  );
}
