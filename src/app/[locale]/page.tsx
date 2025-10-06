import Image from 'next/image';
import { Link } from '../../i18n/navigation';

export default function Home({ params }: { params: { locale: 'en' | 'sq' } }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-[5] box-border flex h-screen w-full overflow-hidden bg-[rgba(0,0,0,0.3)] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8">
          <nav className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Image src="/logo_white.svg" alt="Logo" width={180} height={120} priority />
              <div className="flex items-center gap-4 text-sm tracking-widest uppercase">
                <Link
                  href="/"
                  locale="en"
                  className={`text-[12px] uppercase no-underline hover:no-underline ${
                    params.locale === 'en' ? 'text-white' : 'text-white/30 hover:text-white'
                  }`}
                >
                  EN
                </Link>
                <Link
                  href="/"
                  locale="sq"
                  className={`text-[12px] uppercase no-underline hover:no-underline ${
                    params.locale === 'sq' ? 'text-white' : 'text-white/30 hover:text-white'
                  }`}
                >
                  SQ
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-6 text-[12px] tracking-[0.2em] uppercase"></div>
          </nav>

          <div className="flex flex-1 items-center">
            <div className="ml-auto flex flex-col items-end gap-8 pr-2 sm:gap-10 md:gap-12">
              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">About</span>
                <Link
                  href="/about"
                  className="mt-1 text-4xl leading-none font-[100] text-white/80 no-underline hover:text-white sm:text-5xl md:text-6xl"
                >
                  Salon
                </Link>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  What I Do
                </span>
                <Link
                  href="/services"
                  className="mt-1 text-4xl leading-none font-[100] text-white/80 no-underline hover:text-white sm:text-5xl md:text-6xl"
                >
                  Services
                </Link>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  Portfolio
                </span>
                <Link
                  href="/gallery"
                  className="mt-1 text-4xl leading-none font-[100] text-white/80 no-underline hover:text-white sm:text-5xl md:text-6xl"
                >
                  Gallery
                </Link>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  My Products
                </span>
                <Link
                  href="/shop"
                  className="mt-1 text-4xl leading-none font-[100] text-white/80 no-underline hover:text-white sm:text-5xl md:text-6xl"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
