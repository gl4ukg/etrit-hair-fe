"use client";
import { useState } from 'react';
import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';

export default function BookingPage({ params }: { params: { locale: 'en' | 'sq' } }) {
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to submit');
      setStatus({ ok: true, message: 'Thanks! Your request has been sent.' });
      form.reset();
    } catch (err: any) {
      setStatus({ ok: false, message: err.message || 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <SiteNavbar locale={params.locale} />

      <section className="mx-auto w-full max-w-3xl px-6 py-10 lg:px-8">
        <h1 className="text-3xl font-light text-white">Book an appointment</h1>
        <p className="mt-2 text-sm text-white/70">
          Fill the form and we will get back to you to confirm the details.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Full name
              </label>
              <input
                name="name"
                required
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Phone
              </label>
              <input
                name="phone"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
                placeholder="+355 ..."
              />
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Preferred date
              </label>
              <input
                name="date"
                type="date"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Service
              </label>
              <select
                name="service"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Women’s Haircut">Women’s Haircut</option>
                <option value="Men’s Haircut">Men’s Haircut</option>
                <option value="Color">Color</option>
                <option value="Highlights / Balayage">Highlights / Balayage</option>
                <option value="Blowout & Style">Blowout & Style</option>
                <option value="Treatment">Treatment</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
                Preferred time
              </label>
              <input
                name="time"
                type="time"
                className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/60">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-md border border-white/15 bg-black/20 px-3 py-2 text-white outline-none placeholder:text-white/40"
              placeholder="Anything we should know?"
            />
          </div>

          <div className="mt-2">
            <button
              disabled={loading}
              className="rounded bg-white px-6 py-2 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send request'}
            </button>
          </div>

          {status && (
            <div
              className={
                'mt-3 rounded-md border px-3 py-2 text-sm ' +
                (status.ok
                  ? 'border-green-600/30 bg-green-600/10 text-green-200'
                  : 'border-red-600/30 bg-red-600/10 text-red-200')
              }
            >
              {status.message}
            </div>
          )}
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
