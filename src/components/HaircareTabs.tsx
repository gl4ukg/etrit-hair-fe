'use client';

import { useMemo, useState } from 'react';

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
    title: string;
    body: string;
    brands: string;
  };
};

type TabKey = 'before' | 'after' | 'products';

export default function HaircareTabs({ tabLabels, before, after, products }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey | null>(null);

  const toggleTab = (tab: TabKey) => {
    setActiveTab((current) => (current === tab ? null : tab));
  };

  const content = useMemo(() => {
    if (activeTab === null) {
      return null;
    }

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

    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
            {products.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {products.body}
          </p>
        </div>

        <p className="text-2xl font-medium text-zinc-100 md:text-3xl">{products.brands}</p>
      </div>
    );
  }, [activeTab, after, before, products]);

  return (
    <div className="mx-auto mt-20 w-full max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.75)]">
        <div className="grid grid-cols-3 border-b border-white/10">
          <button
            type="button"
            onClick={() => toggleTab('before')}
            className={`py-4 text-sm font-medium tracking-[0.25em] uppercase transition-colors ${
              activeTab === 'before'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.before}
          </button>
          <button
            type="button"
            onClick={() => toggleTab('after')}
            className={`py-4 text-sm font-medium tracking-[0.25em] uppercase transition-colors ${
              activeTab === 'after'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.after}
          </button>
          <button
            type="button"
            onClick={() => toggleTab('products')}
            className={`py-4 text-sm font-medium tracking-[0.25em] uppercase transition-colors ${
              activeTab === 'products'
                ? 'bg-white/[0.06] text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tabLabels.products}
          </button>
        </div>
        {content ? (
          <div className="relative px-6 pt-10 pb-8 md:px-10">
            <p className="mb-4 text-center text-[10px] font-semibold tracking-[0.25em] text-zinc-400 uppercase">
              CARE
            </p>
            {content}
          </div>
        ) : null}
      </div>
    </div>
  );
}
