'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '../i18n/navigation';
import { useTranslations } from 'next-intl';

type Props = {
  locale: 'en' | 'sq';
};

export default function SiteNavbar({ locale }: Props) {
  const t = useTranslations('HomePage');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (panelRef.current && panelRef.current.contains(target)) return;
      if (buttonRef.current && buttonRef.current.contains(target)) return;
      setMobileOpen(false);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown as any);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="2xl:max-w-12xl mx-auto flex h-14 w-full items-center justify-between px-4 text-white">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo_white.svg"
              alt="Logo"
              height={28}
              width={0}
              style={{ width: 'auto', height: 28 }}
              priority
            />
          </Link>

          <div className="hidden items-center gap-4 text-sm tracking-widest uppercase md:flex">
            <Link
              href={pathname || '/'}
              locale="en"
              className={`text-[12px] uppercase no-underline hover:no-underline ${
                locale === 'en' ? 'text-white' : 'text-white/30 hover:text-white'
              }`}
            >
              EN
            </Link>
            <Link
              href={pathname || '/'}
              locale="sq"
              className={`text-[12px] uppercase no-underline hover:no-underline ${
                locale === 'sq' ? 'text-white' : 'text-white/30 hover:text-white'
              }`}
            >
              SQ
            </Link>
          </div>

          {/* <div className="flex items-center gap-4 text-sm tracking-widest uppercase">
            <Link
              href="/"
              locale="en"
              className={`text-[12px] uppercase no-underline hover:no-underline ${
                locale === 'en' ? 'text-white' : 'text-white/30 hover:text-white'
              }`}
            >
              EN
            </Link>
            <Link
              href="/"
              locale="sq"
              className={`text-[12px] uppercase no-underline hover:no-underline ${
                locale === 'sq' ? 'text-white' : 'text-white/30 hover:text-white'
              }`}
            >
              SQ
            </Link>
          </div> */}
        </div>

        <div className="hidden items-center gap-10 text-[12px] tracking-[0.2em] uppercase md:flex">
          <Link href="/" className="nav-link-3d text-white no-underline hover:text-white">
            {t('nav.home.title')}
          </Link>
          <Link href="/about" className="nav-link-3d text-white no-underline hover:text-white">
            {t('nav.about.label')}
          </Link>
          <Link href="/services" className="nav-link-3d text-white no-underline hover:text-white">
            {t('nav.services.title')}
          </Link>
          <Link href="/gallery" className="nav-link-3d text-white no-underline hover:text-white">
            {t('nav.gallery.title')}
          </Link>
          <Link href="/haircare" className="nav-link-3d text-white no-underline hover:text-white">
            {t('nav.shop.title')}
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
          ref={buttonRef}
          className="inline-flex items-center gap-2 rounded px-2 py-1 text-[12px] tracking-[0.2em] text-white/80 uppercase hover:text-white focus:ring-2 focus:ring-white/30 focus:outline-none md:hidden"
        >
          <span className="relative block h-4 w-5">
            {mobileOpen ? (
              <>
                <span className="absolute top-1.5 left-0 h-0.5 w-5 rotate-45 bg-white"></span>
                <span className="absolute top-1.5 left-0 h-0.5 w-5 -rotate-45 bg-white"></span>
              </>
            ) : (
              <>
                <span className="absolute top-0 left-0 h-0.5 w-5 bg-white"></span>
                <span className="absolute top-1.5 left-0 h-0.5 w-5 bg-white"></span>
                <span className="absolute top-3 left-0 h-0.5 w-5 bg-white"></span>
              </>
            )}
          </span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            ref={panelRef}
            className="fixed top-14 right-0 left-0 z-50 mx-4 rounded-md border border-white/10 bg-black/90 p-4 shadow-xl ring-1 ring-white/10"
          >
            <div className="mb-5 flex items-center gap-4 text-sm tracking-widest uppercase">
              <Link
                href={pathname || '/'}
                locale="en"
                className={`text-[12px] uppercase no-underline hover:no-underline ${
                  locale === 'en' ? 'text-white' : 'text-white/30 hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                EN
              </Link>
              <Link
                href={pathname || '/'}
                locale="sq"
                className={`text-[12px] uppercase no-underline hover:no-underline ${
                  locale === 'sq' ? 'text-white' : 'text-white/30 hover:text-white'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                SQ
              </Link>
            </div>
            <nav className="flex flex-col gap-4 text-[12px] tracking-[0.2em] uppercase">
              <Link
                href="/"
                className="text-white no-underline hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.home.title')}
              </Link>{' '}
              <Link
                href="/about"
                className="text-white no-underline hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.about.label')}
              </Link>
              <Link
                href="/services"
                className="text-white no-underline hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.services.title')}
              </Link>
              <Link
                href="/gallery"
                className="text-white no-underline hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.gallery.title')}
              </Link>
              <Link
                href="/haircare"
                className="text-white no-underline hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.shop.title')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
