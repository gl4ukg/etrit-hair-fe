import {NextIntlClientProvider} from 'next-intl';
import {hasLocale} from 'next-intl';
import {routing} from '../../i18n/routing';
import {notFound} from 'next/navigation';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;
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
    <html className={inter.variable}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}