import Image from 'next/image';
import { ParallaxImage } from '@/components/ParallaxImage';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import TextReveal from '@/components/TextReveal';
import FadeInLeft from '@/components/FadeInLeft';
import HighlightsCarousel from '@/components/HighlightsCarousel';
import TestimonialsSection, { Testimonial } from '@/components/TestimonialsSection';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

async function fetchGoogleReviews(): Promise<Testimonial[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID_ETRIT_HAIR;

  if (!apiKey || !placeId) {
    return [];
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;
    const res = await fetch(url, {
      next: { revalidate: 604800 },
    });

    if (!res.ok) {
      console.log('Google Places error HTTP:', res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2), 'google place details');

    if (!data?.result?.reviews) {
      return [];
    }

    return data.result.reviews as Testimonial[];
  } catch {
    return [];
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: 'en' | 'sq' }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  const googleReviews = await fetchGoogleReviews();
  console.log(googleReviews, 'googleReviews');

  const staff = [
    {
      name: 'Etrit Tullumi',
      position: t('team.staff.etrit.position'),
      description: t('team.staff.etrit.description'),
      image: '/etrit.jpg',
    },
    {
      name: 'Ema',
      position: t('team.staff.ema.position'),
      description: t('team.staff.ema.description'),
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/ema.webp',
    },
    {
      name: 'Adea',
      position: t('team.staff.adea.position'),
      description: t('team.staff.adea.description'),
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/adea.webp',
    },
    {
      name: 'Aida',
      position: t('team.staff.aida.position'),
      description: t('team.staff.aida.description'),
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/aida.webp',
    },
    {
      name: 'Rrona',
      position: t('team.staff.rrona.position'),
      description: t('team.staff.rrona.description'),
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/rrona.webp',
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-white via-white/70 to-white" />
      <SiteNavbar locale={locale} />

      {/* <section className="relative">
        <div className="relative h-[80vh] overflow-hidden bg-black">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://157-230-117-143.sslip.io/media/etrit-hair/about/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="https://157-230-117-143.sslip.io/media/etrit-hair/about/about_header.webp"
            preload="metadata"
            title="Etrit Hair Salon - About Us"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <div className="absolute bottom-10 left-1/2 z-10 flex h-full w-full max-w-6xl -translate-x-1/2 flex-col justify-end px-4 pb-16">
            <div className="hidden items-center gap-3 text-xs font-medium tracking-[0.25em] text-white uppercase md:inline-flex">
              <span className="h-[1px] w-10 bg-gradient-to-r from-white/70 to-white/40" />
              <TextReveal delay={0.25}>{t('hero.kicker')}</TextReveal>
            </div>

            <div className="flex hidden items-end justify-between md:inline-flex">
              <TextReveal
                className="mt-2 text-[80px] font-semibold tracking-tight text-white"
                delay={0.1}
              >
                Etrit Hair
              </TextReveal>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative bg-white/90 py-24 text-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row">
          <div className="md:w-1/4">
            <FadeInLeft delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-950">
                <span className="h-2 w-2 rounded-full bg-zinc-950" />
                {t('intro.badge')}
              </div>
            </FadeInLeft>
          </div>

          <div className="space-y-12 md:w-3/4">
            <FadeInLeft delay={0.1}>
              <h2 className="text-center text-3xl leading-tight font-semibold md:text-left md:text-5xl">
                {t('intro.headline')}
              </h2>
            </FadeInLeft>

            <FadeInLeft delay={0.2}>
              <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
                <p className="text-sm font-semibold text-zinc-950">
                  <span className="mr-2 inline-block h-1 w-6 rounded-full bg-gradient-to-r from-zinc-950 to-zinc-950/40" />
                  {t('story.title')}
                </p>
                <p className="text-sm leading-relaxed text-zinc-700">{t('story.body')}</p>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={0.3}>
              <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
                <p className="text-sm font-semibold text-zinc-950">
                  <span className="mr-2 inline-block h-1 w-6 rounded-full bg-gradient-to-r from-zinc-950 to-zinc-950/40" />
                  {t('whatWeDo.title')}
                </p>
                <p className="text-sm leading-relaxed text-zinc-700">{t('whatWeDo.body')}</p>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </section>
      {/* 
      <section className="bg-zinc-950">
        <ParallaxImage src="/about/IMG_5071.webp" alt="Detail of haircut" speed={0.3} />
      </section> */}

      <section className="bg-zinc-950 py-16">
        <div className="mx-auto flex max-w-6xl flex-row justify-between px-4">
          <FadeInLeft delay={0}>
            <div className="mb-8 flex flex-col justify-between gap-4">
              <p className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
                {t('highlights.title')}
              </p>
              <p className="text-xs text-zinc-400">{t('highlights.subtitle')}</p>
            </div>
          </FadeInLeft>
          <FadeInLeft delay={0.1}>
            <button className="cursor-pointer rounded-lg border border-white px-4 py-2 text-sm text-white transition-colors hover:bg-white hover:text-zinc-900">
              <Link href="/gallery">{t('highlights.cta')}</Link>
            </button>
          </FadeInLeft>
        </div>
        <HighlightsCarousel />
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeInLeft delay={0}>
            <div className="mb-4 flex items-center gap-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-white" />
              {t('philosophy.kicker')}
            </div>
          </FadeInLeft>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/70 px-6 py-12 md:px-10">
            <FadeInLeft delay={0.1}>
              <div className="mb-12 text-center">
                <p className="text-right text-xs tracking-[0.25em] text-white uppercase">
                  {t('philosophy.stamp')}
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  {t('philosophy.title')}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300">
                  {t('philosophy.description')}
                </p>
              </div>
            </FadeInLeft>

            <div className="grid gap-6 md:grid-cols-2">
              <FadeInLeft delay={0.2}>
                <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white" />
                      <span className="font-semibold tracking-wide">
                        {t('philosophy.cards.philosophy.title')}
                      </span>
                    </div>
                  </div>
                  <p>{t('philosophy.cards.philosophy.body')}</p>
                </article>
              </FadeInLeft>

              <FadeInLeft delay={0.3}>
                <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-white" />
                      <span className="font-semibold tracking-wide">
                        {t('philosophy.cards.why.title')}
                      </span>
                    </div>
                  </div>
                  <p>{t('philosophy.cards.why.body')}</p>
                </article>
              </FadeInLeft>
              {/* <FadeInLeft delay={0.4}>
                <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="font-semibold tracking-wide">OUR VALUES</span>
                    </div>
                  </div>
                  <p>
                    "Clients often tell me they feel calmer the moment they sit in the chair. For
                    me, that&apos;s the most important part—creating a space where you feel listened
                    to, understood, and confident in the result."
                  </p>
                </article>
              </FadeInLeft> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <ParallaxImage src="/section-bg.jpg" alt="Detail of haircut" speed={0.3} />
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeInLeft delay={0.1}>
            <div className="mb-12 flex items-center gap-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-white" />
              {t('team.kicker')}
            </div>
          </FadeInLeft>

          <FadeInLeft delay={0.1}>
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {t('team.title')}
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-zinc-300 md:text-base">
                {t('team.subtitle')}
              </p>
            </div>
          </FadeInLeft>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {staff.map((item, index) => (
              <FadeInLeft key={item.name} delay={0.2 + index * 0.1}>
                <div className="card min-h-[250px] rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-zinc-400">{item.position}</p>
                  <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                </div>
              </FadeInLeft>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection reviews={googleReviews} />

      <SiteFooter />
    </main>
  );
}
