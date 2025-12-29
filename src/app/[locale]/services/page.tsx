import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import {
  ScissorsIcon,
  PaintBrushIcon,
  SparklesIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from '@/i18n/navigation';

const tabs = [
  {
    key: 'haircuts',
    label: 'Haircuts',
    icon: ScissorsIcon,
    description: 'Clean, structured cuts with movement and softness.',
    items: [
      { name: 'Short Length', price: '20' },
      { name: 'Medium Length', price: '20 - 25' },
      { name: 'Long Length', price: '23 - 30' },
    ],
  },
  {
    key: 'haircolor',
    label: 'Hair Color',
    icon: PaintBrushIcon,
    description: 'Balayage, highlights, brunettes and blondes.',
    items: [
      { name: 'Short Length', price: '140 - 160' },
      { name: 'Medium Length', price: '160 - 200' },
      { name: 'Long Length', price: '200 - 300' },
    ],
  },
  {
    key: 'haircare',
    label: 'Hair Care',
    icon: SparklesIcon,
    description: 'Treatments that restore strength, moisture and shine.',
    items: [
      { name: 'Olaplex Treatment', price: '50' },
      { name: 'K18 Repair Treatment', price: '55' },
      { name: 'Nashi Argan Mast Treatment', price: '40' },
    ],
  },
] as const;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'sq' }>;
}) {
  const { locale } = await params;

  return (
    <main className="text-foreground min-h-screen w-full bg-black">
      <SiteNavbar locale={locale} />
      <div className="lg:max-w-8xl w-full px-4 pt-12 pb-10 lg:ml-auto">
        <section className="grid gap-8 min-[769px]:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] min-[769px]:gap-18">
          <div className="h-[360px] w-full bg-[url('/services.png')] bg-contain bg-center bg-no-repeat sm:h-[480px] lg:h-[700px]" />

          <div className="mt-8 space-y-10 text-left text-white min-[769px]:mt-0">
            <div className="space-y-3">
              <h1 className="pt-6 text-[34px] leading-tight font-light text-white sm:pt-10 sm:text-[48px] lg:pt-16 lg:text-[68px]">
                Precision. experience. <br />
                results.
              </h1>
              <p className="max-w-md text-sm font-light text-zinc-300 min-[769px]:text-lg sm:text-base">
                Women&apos;s cuts and color focused on balance, shape, and longevity. Explore a
                service menu designed to enhance your natural beauty and lifestyle.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {/* <button className="rounded-full bg-zinc-100 px-6 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-white">
              </button> */}
              <Link href="/booking">
                <button className="cursor-pointer rounded-full border border-zinc-500 px-6 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-300 hover:text-white">
                  Book Appointment
                </button>
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-8 lg:hidden">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <div key={tab.key} className="group [perspective:1400px]">
                    <div className="relative h-40 w-full rounded-3xl border border-white/10 bg-white/[0.02] text-white shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out [transform-style:preserve-3d] hover:-translate-y-1 hover:[transform:rotateY(180deg)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.9)] sm:h-44">
                      <div className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent px-5 py-5 [backface-visibility:hidden]">
                        <h3 className="flex items-center gap-2 text-2xl leading-tight font-semibold text-white">
                          {/* <Icon className="h-5 w-5" /> */}
                          <span>{tab.label}</span>
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300">{tab.description}</p>
                        <ArrowRightCircleIcon className="mt-2 ml-auto h-6 w-6" />
                      </div>

                      <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-center rounded-3xl bg-gradient-to-br from-emerald-500/12 via-zinc-950 to-black px-5 py-5 text-xs [backface-visibility:hidden]">
                        <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
                          {/* <Icon className="h-5 w-5" /> */}
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
              })}
            </div>

            <div className="mt-10 hidden justify-start lg:flex lg:justify-end 2xl:justify-start">
              <div className="flex h-[220px] max-w-full gap-4 overflow-x-auto pr-2 pb-2 [scrollbar-width:none] sm:gap-5 sm:pr-4 [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <div
                      key={tab.key}
                      className="group flex max-w-[360px] min-w-[320px] items-center [perspective:1400px] last:mr-10"
                    >
                      <div className="relative h-44 w-full rounded-3xl border border-white/10 bg-white/[0.02] text-white shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-700 ease-out [transform-style:preserve-3d] hover:-translate-y-1 hover:[transform:rotateY(180deg)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.9)] lg:h-48">
                        <div className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent px-5 py-5 [backface-visibility:hidden]">
                          <h3 className="flex items-center gap-2 text-2xl leading-tight font-semibold text-white">
                            {/* <Icon className="h-5 w-5" /> */}
                            <span>{tab.label}</span>
                          </h3>
                          <p className="text-md mt-4 text-zinc-300">{tab.description}</p>
                          <ArrowRightCircleIcon className="mt-2 ml-auto h-6 w-6" />
                        </div>

                        <div className="absolute inset-0 flex h-full w-full [transform:rotateY(180deg)] flex-col justify-center rounded-3xl bg-gradient-to-br from-emerald-500/12 via-zinc-950 to-black px-5 py-5 text-xs [backface-visibility:hidden]">
                          <h3 className="flex items-center gap-2 text-2xl font-semibold text-white">
                            {/* <Icon className="h-5 w-5" /> */}
                            <span>{tab.label}</span>
                          </h3>
                          <ul className="mt-4 space-y-2 text-zinc-200">
                            {tab.items.map((item) => (
                              <li
                                key={item.name}
                                className="flex items-center justify-between gap-2"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                                  <span className="text-[14px] tracking-[0.16em] text-zinc-300 uppercase">
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
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
