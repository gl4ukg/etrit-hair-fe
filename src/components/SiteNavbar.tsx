import Image from 'next/image';
import { Link } from '../i18n/navigation';

type Props = {
  locale: 'en' | 'sq';
};

export default function SiteNavbar({ locale }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6 text-white lg:px-8">
        {/* Left: Logo + Language switcher */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/logo_white.svg" alt="Logo" width={120} height={32} priority />
          </Link>

          {/* Language switcher */}
          <div className="flex items-center gap-4 text-sm uppercase tracking-widest">
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
          </div>
        </div>

        {/* Center/Right: main nav */}
        <div className="flex items-center gap-6 text-[12px] uppercase tracking-[0.2em]">
          <Link href="/about" className="no-underline text-white/70 hover:text-white">About</Link>
          <Link href="/services" className="no-underline text-white/70 hover:text-white">Services</Link>
          <Link href="/gallery" className="no-underline text-white/70 hover:text-white">Gallery</Link>
          <Link href="/shop" className="no-underline text-white/70 hover:text-white">Shop</Link>
        </div>
      </nav>
    </header>
  );
}
