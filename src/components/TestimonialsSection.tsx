import Image from 'next/image';

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

  const topReviews = reviews.slice(0, 6);

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-emerald-600 uppercase">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              What clients say about Etrit Hair
            </h2>
          </div>
          <div className="text-xs text-zinc-400 md:text-sm">
            <p className="font-medium text-emerald-400">Verified Google Reviews</p>
            <p>Real experiences from clients who visited the salon.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {topReviews.map((review) => (
            <article
              key={`${review.author_name}-${review.relative_time_description}-${review.text.slice(0, 16)}`}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/70 p-5 text-sm text-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.65)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full bg-zinc-800">
                  {review.profile_photo_url ? (
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-zinc-400">
                      {review.author_name?.charAt(0) ?? 'E'}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white md:text-sm">
                    {review.author_name || 'Google Reviewer'}
                  </p>
                  {review.relative_time_description && (
                    <p className="text-[10px] text-zinc-500">{review.relative_time_description}</p>
                  )}
                </div>
              </div>

              <div className="mb-4 flex items-center gap-1 text-xs text-yellow-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={
                      idx < Math.round(review.rating) ? 'text-yellow-300' : 'text-zinc-600'
                    }
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-[11px] text-zinc-400">{review.rating.toFixed(1)}</span>
              </div>

              <p className="line-clamp-5 text-xs leading-relaxed text-zinc-300 md:text-sm">
                "{review.text}"
              </p>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end text-xs text-zinc-400">
          <a
            href="https://www.google.com/search?q=Etrit+Hair+Reviews"
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
