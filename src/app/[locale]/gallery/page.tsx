import Image from 'next/image';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'sq' }>;
}) {
  const { locale } = await params;

  const sources = [
    '/about/IMG_5071.jpeg',
    '/about/IMG_5073.jpeg',
    '/about/IMG_5074.jpeg',
    '/about/IMG_5804.jpeg',
    '/about/IMG_5805.jpeg',
    '/about/IMG_5071.jpeg',
    '/about/IMG_5073.jpeg',
    '/about/IMG_5074.jpeg',
    '/about/IMG_5804.jpeg',
    '/about/IMG_5805.jpeg',
  ];

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        <div className="columns-1 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {sources.map((src, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid overflow-hidden rounded-lg bg-black/20"
            >
              <div
                className={
                  idx % 5 === 0
                    ? 'relative h-[520px]'
                    : idx % 5 === 1
                      ? 'relative h-[360px]'
                      : idx % 5 === 2
                        ? 'relative h-[280px]'
                        : idx % 5 === 3
                          ? 'relative h-[420px]'
                          : 'relative h-[320px]'
                }
              >
                <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
