'use client';

import { useState } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceTab = {
  key: string;
  label: string;
  description: string;
  items: ReadonlyArray<ServiceItem>;
};

export function ServiceCardMobile({ tab }: { tab: ServiceTab }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group [perspective:1400px]" onClick={() => setFlipped((prev) => !prev)}>
      <div
        className={
          'relative h-40 w-full rounded-3xl border border-white/10 bg-white/[0.02] text-white ' +
          'shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-all duration-700' +
          'ease-[cubic-bezier(0.22,0.61,0.36,1)] [transform-style:preserve-3d] sm:h-44' +
          (flipped
            ? '-translate-y-1 [transform:rotateY(180deg)] shadow-[0_22px_55px_rgba(0,0,0,0.9)]'
            : '')
        }
      >
        {/* Front */}
        <div
          className={
            'absolute inset-0 flex flex-col justify-center rounded-3xl bg-gradient-to-br ' +
            'from-white/[0.06] via-white/[0.02] to-transparent px-5 py-5' +
            'opacity-100 transition-opacity duration-700 [backface-visibility:hidden]' +
            (flipped ? 'opacity-0' : '')
          }
        >
          <h3 className="flex items-center gap-2 text-2xl leading-tight font-semibold text-white">
            <span>{tab.label}</span>
          </h3>
          <p className="mt-2 text-sm text-zinc-300">{tab.description}</p>
          <ArrowRightCircleIcon className="mt-2 ml-auto h-6 w-6" />
        </div>

        {/* Back */}
        <div
          className={
            'absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-center ' +
            'rounded-3xl bg-gradient-to-br from-emerald-500/12 via-zinc-950 to-black px-5 py-5' +
            'text-xs opacity-0 transition-opacity duration-700 [backface-visibility:hidden]' +
            (flipped ? 'opacity-100' : '')
          }
        >
          <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
            <span>{tab.label}</span>
          </h3>
          <ul className="mt-3 space-y-2 text-zinc-200">
            {tab.items.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span className="text-[11px] tracking-[0.16em] text-zinc-300 uppercase">
                    {item.name}
                  </span>
                </span>
                <span className="text-xs text-zinc-100">€{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
