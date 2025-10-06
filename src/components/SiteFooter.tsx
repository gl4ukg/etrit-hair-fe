import { Link } from '../i18n/navigation';

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/30 text-white/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
        {/* Top: 3 columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Social networks */}
          <div>
            <div className="text-[11px] tracking-[0.2em] text-white/40 uppercase">
              Social networks
            </div>
            <div className="mt-3 flex items-center gap-6 text-sm">
              <a
                href="https://www.tiktok.com/@etrit.hair?lang=en"
                className="text-white/70 no-underline hover:text-white"
              >
                Tiktok
              </a>
              <a
                href="https://www.instagram.com/etrithair/"
                className="text-white/70 no-underline hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/etrithair"
                className="text-white/70 no-underline hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="text-[11px] tracking-[0.2em] text-white/40 uppercase">Email</div>
            <div className="mt-3 text-sm">
              <a
                href="mailto:Eetriti@gmail.com"
                className="text-white/80 no-underline hover:text-white"
              >
                Eetriti@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="text-[11px] tracking-[0.2em] text-white/40 uppercase">Location</div>
            <div className="mt-3 text-sm leading-6 text-white/80">
              Nura Group, Rruga B
              <br />
              Prishtina, Kosovo
            </div>
          </div>
        </div>

        {/* Bottom links */}
        {/* <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="no-underline hover:text-white/80">Terms and conditions</a>
            <a href="#" className="no-underline hover:text-white/80">User agreement</a>
            <a href="#" className="no-underline hover:text-white/80">Public contract</a>
            <a href="#" className="no-underline hover:text-white/80">How Access to Courses and Streams Works After Purchase</a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="no-underline hover:text-white/80">Blog</Link>
            <Link href="/faq" className="no-underline hover:text-white/80">FAQ</Link>
          </div>
        </div> */}

        <div className="mt-6 text-xs text-white/40">© 2025</div>
      </div>
    </footer>
  );
}
