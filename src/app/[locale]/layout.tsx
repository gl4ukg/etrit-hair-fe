import { NextIntlClientProvider } from 'next-intl';
import { hasLocale } from 'next-intl';
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';
import '../globals.css';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://etrit-hair.com';

  const metadata: Record<string, any> = {
    en: {
      title: 'Etrit Hair - Premium Hair Salon & Styling Services',
      description:
        'Experience luxury hair care at Etrit Hair. Professional styling, coloring, and treatments by expert stylists. Book your appointment today.',
      keywords:
        'hair salon, hair styling, hair coloring, hair treatment, professional hairstylist, beauty salon, hair salon in prishtina, top rated hair in prishtina, hairdresser in prishtina',
    },
    sq: {
      title: 'Etrit Hair - Premium Hair Salon & Styling Services',
      description:
        'Experience luxury hair care at Etrit Hair. Professional styling, coloring, and treatments by expert stylists. Book your appointment today.',
      keywords:
        'hair salon, hair styling, hair coloring, hair treatment, professional hairstylist, beauty salon, hair salon in prishtina, top rated hair in prishtina, hairdresser in prishtina',
      // title: 'Etrit Hair - Salon Profesional Flokësh & Shërbime Stilizimi',
      // description:
      //   'Përjetoni kujdesin luksoz të flokëve në Etrit Hair. Stilizim profesional, ngjyrosje dhe trajtim nga stilistë ekspertë. Rezervoni takimin tuaj sot.',
      // keywords:
      //   'salon flokësh, stilizim flokësh, ngjyrosje flokësh, trajtim flokësh, stilist profesional, salon bukurie, sallon per floke prishtine, sallon per floke, frizer ne prishtine',
    },
  };

  const content = metadata[locale] || metadata.en;

  return {
    title: {
      default: content.title,
      template: `%s | Etrit Hair`,
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: 'Etrit Hair' }],
    creator: 'Etrit Hair',
    publisher: 'Etrit Hair',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        sq: '/sq',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: siteUrl,
      title: content.title,
      description: content.description,
      siteName: 'Etrit Hair',
      images: [
        {
          url: `${siteUrl}/etrit-hair-logo.png`,
          width: 1200,
          height: 630,
          alt: 'Etrit Hair Salon',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [`${siteUrl}/etrit-hair-logo.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Missing translation file for locale: ${locale}`);
    notFound();
  }
  return (
    <html className={`${inter.variable} `}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
