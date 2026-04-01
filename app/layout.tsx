import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Layout from '@/layout/Layout';
import { getCategories } from '@/services/postsAPI';
import CookieConsent from '@/components/CookieConsent';
import { GoogleTagManager } from '@next/third-parties/google';
import { Merriweather, Poppins } from 'next/font/google';
import DynamicPixel from '@/components/DynamicPixel';
import { Suspense } from 'react';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});
export const metadata: Metadata = {
  title: 'Nice Advice – Practical Health, Family, Nutrition & Lifestyle Tips',
  description: 'Nice Advice – articles and useful tips about health, family, sports, nutrition, and everyday life. Find practical advice for a better lifestyle.',
  keywords: 'health, family, sports, human body, lifestyle, nutrition, tips, guides, advice',
  authors: [{ name: 'Nice Advice' }],
  openGraph: {
    title: 'Nice Advice – Practical Health, Family, Nutrition & Lifestyle Tips',
    description: 'Nice Advice – articles and useful tips about health, family, sports, nutrition, and everyday life. Find practical advice for a better lifestyle.',
    type: 'website',
    url: 'https://nice-advice.info/',
    images: ['https://vivid-triumph-4386b82e17.media.strapiapp.com/preview_fe3bc00fab.png'],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nice Advice – Practical Health, Family, Nutrition & Lifestyle Tips',
    description: 'Nice Advice – articles and useful tips about health, family, sports, nutrition, and everyday life. Find practical advice for a better lifestyle.',
    site: '@niceadvice',
    images: ['https://vivid-triumph-4386b82e17.media.strapiapp.com/preview_fe3bc00fab.png'],
  },
  icons: {
    icon: [
      { url: '/assets/svg/tick.svg', type: 'image/svg+xml' },
      { url: '/assets/svg/tick.svg', type: 'image/png' },
    ],
    apple: '/assets/svg/tick.svg',
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/svg/tick.svg',
        color: '#0ea5e9',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://nice-advice.info/',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let categories = [];
  try {
    const data = await getCategories();
    categories = data?.data || [];
  } catch (err) {
    console.error(err);
  }

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1088654265590051"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nice Advice',
              url: 'https://nice-advice.info/',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://nice-advice.info/search?q={query}',
                'query-input': 'required name=query',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Nice Advice',
              url: 'https://nice-advice.info/',
              logo: 'https://vivid-triumph-4386b82e17.media.strapiapp.com/tick_b2fcfe5480.svg',
              sameAs: [
                'https://www.facebook.com/niceadvice',
                'https://www.linkedin.com/company/niceadvice',
                'https://twitter.com/niceadvice',
              ],
            }),
          }}
        />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-NZS7G3BL'} />
      <body className={`antialiased ${merriweather.variable} ${poppins.variable}`}>
        <Suspense fallback={null}>
          <DynamicPixel />
        </Suspense>
        
        <Layout categories={categories}>
          {children}
        </Layout>
        
        <div id="modal"></div>
        <CookieConsent />
      </body>
    </html>
  );
}
