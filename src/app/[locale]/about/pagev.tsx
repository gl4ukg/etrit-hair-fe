'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxImage } from '@/components/ParallaxImage';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Top Nav */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-500" />
            <span className="text-sm tracking-[0.25em]">LINE</span>
          </div>

          <nav className="flex items-center gap-8 text-sm text-zinc-300">
            <button className="hover:text-white">
              Home<span className="ml-1 text-[10px]">01</span>
            </button>
            <button className="text-white">
              About<span className="ml-1 text-[10px]">02</span>
            </button>
            <button className="hover:text-white">
              Inside<span className="ml-1 text-[10px]">03</span>
            </button>
            <button className="hover:text-white">
              Mentoring<span className="ml-1 text-[10px]">04</span>
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900">
              JOIN NOW
            </button>
          </nav>
        </div>
      </header>

      <section className="relative pt-24">
        <div className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
          <ParallaxImage src="/about/IMG_5071.jpeg" alt="Founders" speed={0.2} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <div className="absolute bottom-0 z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16">
            <span className="mb-4 text-sm text-zinc-300">©2025</span>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">About Us*</h1>
            <p className="mt-6 max-w-xl text-sm text-zinc-300">
              Precision detail individuality - Etrit Hair experience
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row">
          <div className="md:w-1/4">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Building with Passion
            </div>
          </div>

          <div className="space-y-12 md:w-3/4">
            <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              Every project is an opportunity to push boundaries, tell a story, and create something
              truly memorable. Let&apos;s build the future of the industry together.®
            </h2>

            <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
              <p className="text-sm font-semibold text-zinc-200">Who are we ?</p>
              <p className="text-sm leading-relaxed text-zinc-300">
                Passionate creatives and educators in the hair industry—We have dedicated ourselves
                to sharing our years of experience, creativity, and innovative techniques. From
                cutting and styling to photography, editing skills and brand building, our mission
                is to inspire and elevate every individual in this ever-evolving industry.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
              <p className="text-sm font-semibold text-zinc-200">Why LINE ?</p>
              <p className="text-sm leading-relaxed text-zinc-300">
                Behind everything we do lies a Line—Every journey, mindset, hair section, shape, and
                frame begins with a line. Lines form the foundation of precision and creativity,
                guiding our craft in cutting, styling, and capturing moments. Our slogan, &quot;Read
                Between the Lines,&quot; reflects the deeper purpose behind our work—inviting you to
                uncover the meaning and intention within every lesson, action and detail we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <ParallaxImage src="/about/IMG_5071.jpeg" alt="Detail of haircut" speed={0.3} />
      </section>

      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 flex items-center gap-2 text-xs text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Featured Stack
          </div>

          <div className="rounded-3xl bg-zinc-900/70 px-6 py-12 md:px-10">
            <div className="mb-12 text-center">
              <p className="text-right text-xs text-zinc-400">©2025</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">INTRODUCTION</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300">
                We&apos;ve been where you are—learning, experimenting, and growing—and now
                we&apos;re here to share everything we&apos;ve discovered to help you on your
                journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                <div className="mb-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="font-semibold tracking-wide">CHARLIE</span>
                    <span className="rounded-full border border-zinc-600 px-2 py-0.5 text-[10px]">
                      PRO
                    </span>
                  </div>
                </div>
                <p>
                  I am a passionate barber and educator dedicated to helping people unlock their
                  true potential. With 8 years of experience, I take pride in taking on any
                  challenge that lies ahead of me—whether that is a new client, student, audience or
                  project. From starting as a self-taught barber to becoming a creative director in
                  the industry&apos;s leading spaces, my focus is on sharing real-world knowledge
                  that actually moves you forward.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-sm leading-relaxed text-zinc-300">
                <div className="mb-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="font-semibold tracking-wide">Martin</span>
                    <span className="rounded-full border border-zinc-600 px-2 py-0.5 text-[10px]">
                      PRO
                    </span>
                  </div>
                </div>
                <p>
                  With nearly a decade of experience in the hair industry, I&apos;ve dedicated my
                  career to pushing creative boundaries. My journey began with building a
                  multi-location barbering company and education academies in Slovakia, which
                  allowed me to refine not only my craft but also my ability to teach and help
                  others to push their own limits. Now I&apos;m focused on giving you the
                  strategies, systems and mindset to turn your skill into a powerful career.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
