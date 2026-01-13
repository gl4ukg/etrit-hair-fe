import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import GalleryGrid from '../../../components/GalleryGrid';
import { Link } from '@/i18n/navigation';
import path from 'path';
import { readdir } from 'fs/promises';

export default async function GalleryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: 'en' | 'sq' }>;
  searchParams?: Promise<{ category?: string }> | { category?: string };
}) {
  const { locale } = await params;

  type CategoryKey = 'brunette' | 'blonde' | 'balayage';
  const categories: Array<{ key: 'all' | CategoryKey; label: string }> = [
    { key: 'all', label: 'All' },
    { key: 'brunette', label: 'Brunette' },
    { key: 'blonde', label: 'Blonde' },
    { key: 'balayage', label: 'Balayage' },
  ];

  const categoryFolders: Record<CategoryKey, string> = {
    brunette: 'Brunette',
    blonde: 'Blonde',
    balayage: 'Balayage',
  };

  const listImages = async (folderName: string) => {
    const abs = path.join(process.cwd(), 'public', 'hairs', folderName);
    const files = await readdir(abs);
    return files
      .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/hairs/${folderName}/${f}`);
  };

  const [brunetteSources, blondeSources, balayageSources] = await Promise.all([
    listImages(categoryFolders.brunette),
    listImages(categoryFolders.blonde),
    listImages(categoryFolders.balayage),
  ]);

  const sourcesByCategory: Record<CategoryKey, string[]> = {
    brunette: brunetteSources,
    blonde: blondeSources,
    balayage: balayageSources,
  };

  const resolvedSearchParams = (await searchParams) ?? {};
  const activeCategoryRaw = (resolvedSearchParams.category ?? 'all').toLowerCase();
  const activeCategory = categories.some((c) => c.key === activeCategoryRaw)
    ? (activeCategoryRaw as (typeof categories)[number]['key'])
    : 'all';

  const sources =
    activeCategory === 'all'
      ? Object.values(sourcesByCategory).flat()
      : sourcesByCategory[activeCategory];

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = c.key === activeCategory;
              const href =
                c.key === 'all' ? '/gallery' : `/gallery?category=${encodeURIComponent(c.key)}`;

              return (
                <Link
                  key={c.key}
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`focus-visible:ring-offset-background inline-flex items-center justify-center rounded-full border px-4 py-2 text-[11px] font-medium tracking-[0.22em] uppercase backdrop-blur transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'border-white/20 bg-white/[0.06] text-white'
                      : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>
        <GalleryGrid sources={sources} />
      </section>

      <SiteFooter />
    </main>
  );
}
