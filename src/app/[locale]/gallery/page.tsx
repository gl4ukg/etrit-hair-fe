import SiteNavbar from '../../../components/SiteNavbar';
import SiteFooter from '../../../components/SiteFooter';
import GalleryGrid from '../../../components/GalleryGrid';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'sq' }>;
}) {
  const { locale } = await params;

  const base = 'https://157-230-117-143.sslip.io/media/etrit-hair/gallery';

  const sources = [
    `${base}/313198078_139372268599854_6978251956685839200_n(1).jpg`,
    `${base}/343278753_1208569573130063_7615236875637932797_n.jpg`,
    `${base}/358681808_18380056789062559_2418392751672351318_n.jpg`,
    `${base}/365739613_18385629916062559_2606215621539327518_n.jpg`,
    `${base}/367452295_18386531662062559_2229490124570295256_n.jpg`,
    `${base}/444481390_435890342638514_5123149415779823275_n.jpg`,
    `${base}/446354699_1553226521926011_6332938086862167943_n.jpg`,
    `${base}/449532733_788644236714097_475633129053053685_n.jpg`,
    `${base}/504077409_18519182518062559_6647569396359637023_n.jpg`,
    `${base}/505258836_18518055652062559_3304823209006675400_n.jpg`,
    `${base}/518797080_18523723021062559_5146039805755827029_n.jpg`,
    `${base}/530908293_18529022932062559_3750644558349443916_n.jpg`,
    `${base}/562700203_18541155376062559_6543167450642810001_n.jpg`,
    `${base}/569220065_18544330618062559_118598641141144204_n.jpg`,
    `${base}/572168000_18546652222062559_55269343787934991_n.jpg`,
    `${base}/IMG_1230.jpeg`,
    `${base}/IMG_1231.jpeg`,
    `${base}/IMG_1235 (1).jpeg`,
    `${base}/IMG_1235.jpeg`,
    `${base}/IMG_1236 (1).jpeg`,
    `${base}/IMG_1236.jpeg`,
    `${base}/IMG_1237.jpeg`,
    `${base}/IMG_1238.jpeg`,
    `${base}/IMG_1240.jpeg`,
  ];

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <SiteNavbar locale={locale} />

      <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        <GalleryGrid sources={sources} />
      </section>

      <SiteFooter />
    </main>
  );
}
