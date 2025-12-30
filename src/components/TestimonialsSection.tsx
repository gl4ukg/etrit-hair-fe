import Image from 'next/image';
import TestimonialsCarousel from './TestimonialsCarousel';

export type Testimonial = {
  author_name: string;
  rating: number;
  relative_time_description?: string;
  text: string;
  profile_photo_url?: string;
};

export default function TestimonialsSection({ reviews }: { reviews: Testimonial[] }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-white uppercase">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              What clients say about us
            </h2>
          </div>
          <div className="text-xs text-zinc-400 md:text-sm">
            <p className="font-medium text-emerald-400">Verified Google Reviews</p>
            <p>Real experiences from clients who visited the salon.</p>
          </div>
        </div>

        <TestimonialsCarousel reviews={reviews} />

        <div className="mt-8 flex items-center justify-end text-xs text-zinc-400">
          <a
            href="https://www.google.com/search?sca_esv=e2fb2748a0591637&sxsrf=AE3TifNUlqL9id1p4jq9Wje4Ksv1ENRIrA:1765491094972&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2UZg50m6gOWfOuqC-5jaRfupdWVTgAa2TGLBJHFzVx9NNzkQFcFTPtrG9L0R5Gm5Im2wQDwCpnva4wfRb8VFaPjtBsI&q=Etrit+Hair+Reviews&sa=X&ved=2ahUKEwjnpsfsxraRAxVeXUEAHUDTLDkQ0bkNegQILhAD&biw=1512&bih=786&dpr=2"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/70 px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-zinc-200 uppercase transition hover:border-emerald-400/70 hover:text-white"
          >
            View all on Google
          </a>
        </div>
      </div>
    </section>
  );
}
