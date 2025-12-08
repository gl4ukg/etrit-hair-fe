import { Link } from '../i18n/navigation';

export default function SiteFooter() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Shop', href: '/shop' },
  ];

  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 text-white/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* Left: Stay connected */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white/40 uppercase">
                Stay connected®
              </p>
              <p className="mt-3 text-2xl font-semibold text-purple-300 sm:text-3xl">
                <a href="mailto:info@etrithair.com" className="no-underline hover:text-purple-200">
                  info@etrithair.com
                </a>
              </p>
              <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
                Crafted with creativity and precision. Reach out anytime to book an appointment, ask
                a question, or just say hello.
              </p>
            </div>
          </div>

          {/* Right: simple navigation list */}
          <div className="flex flex-col justify-between gap-4 text-xs sm:text-sm">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-white/40 uppercase">
              Navigation
            </p>
            <nav className="space-y-2">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between gap-4 rounded-full border border-transparent px-3 py-2 text-white/70 no-underline transition-colors hover:border-white/15 hover:text-white"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-[10px] text-white/40">→</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex w-full flex-col justify-between sm:flex-row sm:items-center">
            <p className="hidden sm:block">Copyright © 2025 Etrit Hair. All rights reserved.</p>
            <p className="sm:ml-1">
              Designed &amp; built by{' '}
              <Link
                href="https://codespherellc.com/"
                className="text-white/60 underline-offset-4 hover:text-white/80 hover:underline"
              >
                www.codespherellc.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
