'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import type { Testimonial } from './TestimonialsSection';

export default function TestimonialsCarousel({ reviews }: { reviews: Testimonial[] }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="!pb-10"
    >
      {reviews.map((review) => (
        <SwiperSlide
          key={`${review.author_name}-${review.relative_time_description}-${review.text.slice(0, 16)}`}
          className="flex h-full"
        >
          <article className="relative flex h-[250px] w-full flex-col overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/70 p-5 text-sm text-zinc-200 shadow-[0_18px_60px_rgba(0,0,0,0.65)]">
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
                  className={idx < Math.round(review.rating) ? 'text-yellow-300' : 'text-zinc-600'}
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
