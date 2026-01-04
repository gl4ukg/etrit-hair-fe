import Image from 'next/image';
import { ParallaxImage } from '@/components/ParallaxImage';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import TextReveal from '@/components/TextReveal';
import FadeInLeft from '@/components/FadeInLeft';
import HighlightsCarousel from '@/components/HighlightsCarousel';
import TestimonialsSection, { Testimonial } from '@/components/TestimonialsSection';

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
  const googleReviews = await fetchGoogleReviews();
  console.log(googleReviews, 'googleReviews');

  const staff = [
    {
      name: 'Etrit Tullumi',
      position: 'Founder & Creative Director',
      description:
        'Leads the salon with a sharp eye for detail and a calm, structured approach. Dedicated to technique, consistency, and creating an elevated experience for every client.',
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/etrit.webp',
    },
    {
      name: 'Ema',
      position: 'Stylist',
      description:
        'Bright, fast, and effortlessly fun. She brings good energy to every client, keeps the mood light, and delivers clean, precise work every single time.',
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/ema.webp',
    },
    {
      name: 'Adea',
      position: 'Stylist',
      description:
        'Warm, friendly, and always smiling. She brings a natural charm to the salon, keeps clients relaxed, and delivers clean, consistent work every time.',
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/adea.webp',
    },
    {
      name: 'Aida',
      position: 'Stylist',
      description:
        'Steady, gentle, and detail-driven. She works with focus, brings a soft presence to the salon, and always delivers clean, polished results.',
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/aida.webp',
    },
    {
      name: 'Rrona',
      position: 'Social Media & Appointments',
      description:
        "Organized, responsive, and creative. She manages bookings with ease and keeps the salon's online presence clean, clear, and up to date.",
      image: 'https://157-230-117-143.sslip.io/media/etrit-hair/staff/rrona.webp',
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700" />
      <SiteNavbar locale={locale} />

      <section className="relative">
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
            {/* <TextReveal className="mb-4 text-sm text-zinc-300" delay={0.2}>
              &copy;2025
            </TextReveal> */}

            <div className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-white uppercase">
              <span className="h-[1px] w-10 bg-gradient-to-r from-emerald-700/60 to-emerald-500/60" />
              <TextReveal delay={0.25}>About</TextReveal>
            </div>

            <div className="flex items-end justify-between">
              <TextReveal
                className="mt-2 text-[80px] font-semibold tracking-tight text-white"
                delay={0.1}
              >
                Etrit Hair
              </TextReveal>

              {/* <TextReveal className="mt-6 max-w-xl text-sm text-zinc-300" delay={0.3}>
                A focused, minimal salon in Prishtina dedicated to detail, calm, and making every
                client feel seen.
              </TextReveal> */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row">
          <div className="md:w-1/4">
            <FadeInLeft delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-emerald-700" />
                Since 2019
              </div>
            </FadeInLeft>
          </div>

          <div className="space-y-12 md:w-3/4">
            <FadeInLeft delay={0.1}>
              <h2 className="text-center text-3xl leading-tight font-semibold md:text-left md:text-5xl">
                Built on a passion for creativity and connection. Here, it&apos;s not just about
                your hair—it&apos;s about how you feel when you walk out the door.®
              </h2>
            </FadeInLeft>

            <FadeInLeft delay={0.2}>
              <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
                <p className="text-sm font-semibold text-zinc-200">
                  <span className="mr-2 inline-block h-1 w-6 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-500" />
                  Our Story
                </p>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Etrit Hair was founded after years of experience working in the beauty industry.
                  With over a decade of professional hairstyling experience, I wanted to create a
                  salon where every detail—from color to cut—reflects intention, quality, and
                  genuine care. We opened our doors in 2019 with a vision to blend creativity with
                  purpose, building a space where my passion for beauty could come to life.
                </p>
              </div>
            </FadeInLeft>

            <FadeInLeft delay={0.3}>
              <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
                <p className="text-sm font-semibold text-zinc-200">
                  <span className="mr-2 inline-block h-1 w-6 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" />
                  What We Do
                </p>
                <p className="text-sm leading-relaxed text-zinc-300">
                  We offer a refined range of services designed exclusively for female clients,
                  including balayage, ombre, bleach and lightening services, expert hair coloring,
                  precision haircuts, and signature blow-dry styling. Every service is tailored with
                  attention to detail, ensuring results that feel natural, fresh, and uniquely
                  yours.
                </p>
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
                Highlights
              </p>
              <p className="text-xs text-zinc-400">A few moments from inside the salon.</p>
            </div>
          </FadeInLeft>
          <FadeInLeft delay={0.1}>
            <button className="cursor-pointer rounded-lg border border-emerald-600 px-4 py-2 text-sm text-white transition-colors hover:bg-emerald-600 hover:text-white">
              View All Highlights
            </button>
          </FadeInLeft>
        </div>
        <HighlightsCarousel />
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeInLeft delay={0}>
            <div className="mb-4 flex items-center gap-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              Our Philosophy & Team
            </div>
          </FadeInLeft>

          <div className="rounded-3xl border border-emerald-700/10 bg-zinc-900/70 px-6 py-12 md:px-10">
            <FadeInLeft delay={0.1}>
              <div className="mb-12 text-center">
                <p className="text-right text-xs tracking-[0.25em] text-white uppercase">
                  ©2025 • Etrit Hair Studio
                </p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                  OUR APPROACH
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300">
                  Hair is personal. That&apos;s why we take time to listen, understand your vision,
                  and create a look that complements your style and personality. For us, beauty is a
                  balance of technique, creativity, and trust.
                </p>
              </div>
            </FadeInLeft>

            <div className="grid gap-6 md:grid-cols-2">
              <FadeInLeft delay={0.2}>
                <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-700" />
                      <span className="font-semibold tracking-wide">OUR PHILOSOPHY</span>
                    </div>
                  </div>
                  <p>
                    What I love most about this work is the combination of creativity and
                    connection. There&apos;s something special about helping clients see themselves
                    in a new light—about turning ideas into color, shape, and style. Hair is
                    personal, and every appointment is an opportunity to create something unique. I
                    enjoy listening, understanding your vision, and crafting a look that feels
                    authentically you.
                  </p>
                </article>
              </FadeInLeft>

              <FadeInLeft delay={0.3}>
                <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                  <div className="mb-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-600" />
                      <span className="font-semibold tracking-wide">WHY CHOOSE US</span>
                    </div>
                  </div>
                  <p>
                    Clients choose Etrit Hair for our comfortable atmosphere, high-level expertise,
                    personalized service, and the genuine warmth we bring to every appointment. We
                    believe your salon visit should feel like a break from the outside world—a cozy,
                    minimal, and inviting space that&apos;s warm, friendly, and full of good energy.
                    Behind every great result is a supportive and dedicated team that shares the
                    same passion for quality, professionalism, and hospitality.
                  </p>
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

      {/* <section className="bg-zinc-950">
        <ParallaxImage src="/about/IMG_5071.webp" alt="Detail of haircut" speed={0.3} />
      </section> */}

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <FadeInLeft delay={0.1}>
            <div className="mb-12 flex items-center gap-2 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />
              Meet Our Team
            </div>
          </FadeInLeft>

          <FadeInLeft delay={0.1}>
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                The People Behind Your Experience
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-zinc-300 md:text-base">
                Our dedicated team shares the same passion for quality, professionalism, and
                hospitality—ensuring you&apos;re in the best hands.
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
