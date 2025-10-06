import Image from 'next/image';
import type { ReactNode } from 'react';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import { Link } from '@/i18n/navigation';

export default async function AboutPage({ params }: { params: Promise<{ locale: 'en' | 'sq' }> }) {
  const { locale } = await params;

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      <section className="mx-auto max-w-3xl px-6 pt-10 text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/logo_white.svg"
            alt="Brand"
            width={120}
            height={120}
            className="opacity-90"
          />
        </div>

        <p className="mt-8 text-sm/6 text-white/70">
          The salon is a space where each stylist shares our principles and approach to the author’s
          vision of haircuts, colouring and style through the search for individuality in each
          client. Our team personally trains members and hones their haircutting techniques.
        </p>

        <div className="mt-6 space-y-1 text-white/80">
          <p>Nura Group, Rruga B, Prishtina, Kosovo</p>
          <p>Opening hours: Mon–Sat from 10:00 to 18:00</p>
          <p>+383 45 680 679</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black no-underline hover:bg-white/90"
            href="booking"
          >
            Booking
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-6">
        {(() => {
          const images = [
            '/about/IMG_5071.jpeg',
            '/about/IMG_5073.jpeg',
            '/about/IMG_5074.jpeg',
            '/about/IMG_5804.jpeg',
            '/about/IMG_5805.jpeg',
            '/about/IMG_5805.jpeg',
            '/about/IMG_5805.jpeg',
          ];
          const pattern = [1, 2, 1, 2];
          const rows: ReactNode[] = [];
          let i = 0;

          for (let p = 0; i < images.length; p++) {
            const count = pattern[p % pattern.length];
            const take = Math.min(count, images.length - i);
            const slice = images.slice(i, i + take);
            i += take;

            if (take === 1) {
              const src = slice[0];
              rows.push(
                <div key={`row-${p}`} className="mb-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/20">
                    <Image src={src} alt="Salon photo" fill className="object-cover" />
                  </div>
                </div>,
              );
            } else if (take === 2) {
              rows.push(
                <div key={`row-${p}`} className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {slice.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/20"
                    >
                      <Image src={src} alt="Salon photo" fill className="object-cover" />
                    </div>
                  ))}
                </div>,
              );
            }
          }

          return rows;
        })()}
      </section>

      <div className="h-16" />

      <SiteFooter />
    </main>
  );
}
