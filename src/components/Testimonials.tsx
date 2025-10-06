type Testimonial = {
  id: string;
  name: string;
  date: string;
  text: string;
  avatarUrl?: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 text-white lg:px-8">
      <h2 className="mb-6 text-center text-2xl font-semibold">What Our Clients Say</h2>

      {/* Bleed the scroller to the viewport edges while keeping the heading constrained */}
      <div className="relative -mx-6 lg:-mx-8">
        {/* Horizontal scroll container with restored side padding */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-8">
          {items.map((t) => (
            <article
              key={t.id}
              className="min-w-[300px] max-w-sm snap-start rounded-2xl border border-white/15 bg-white/5 p-5 text-white/90"
            >
              <header className="mb-4 flex items-center gap-3">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.date}</div>
                </div>
              </header>

              <p className="text-sm leading-6 text-white/80">{t.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-white/60">
        <a href="#" className="no-underline hover:text-white">
          Leave a review
        </a>
      </div>
    </section>
  );
}
