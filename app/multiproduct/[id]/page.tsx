import React from 'react';
import { notFound } from 'next/navigation';

const normalizeUrl = (url: string) => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};

const buildAmazonUrl = (url: string, tag: string) => {
  const cleanUrl = normalizeUrl(url);
  if (cleanUrl === '#') return '#';
  let finalTag = tag;
  if (finalTag.includes('spainstore0f-21')) {
    finalTag = 'spainstore0f-21';
  }
  try {
    const urlObj = new URL(cleanUrl);
    urlObj.searchParams.set('tag', finalTag);
    return urlObj.toString();
  } catch (e) {
    const separator = cleanUrl.includes('?') ? '&' : '?';
    return `${cleanUrl}${separator}tag=${finalTag}`;
  }
};

export default async function MultiproductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const STATIC_TAG = 'niceadvice-20';

  let pageData: any = null;

  try {
    const res = await fetch(`https://api.nice-advice.info/get-multiproduct/${id}`, {
      cache: 'no-store',
    });
    
    if (res.status === 404) {
      notFound();
    }
    
    if (!res.ok) {
      throw new Error('Failed to fetch multiproduct');
    }
    
    const data = await res.json();
    pageData = data.data;
  } catch (error) {
    console.error('❌ Error fetching multiproduct:', error);
    notFound();
  }

  if (!pageData) {
    notFound();
  }

  return (
    <div className="bg-[#f5f6f7] dark:bg-neutral-900 min-h-screen pb-28 text-neutral-900 dark:text-neutral-100">
      {/* ================= HERO ================= */}
      <section className="px-4 pt-10 pb-12 text-center max-w-3xl mx-auto">
        <span className="inline-block mb-3 px-4 py-1 rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-semibold">
          🔥 Trending on Amazon Today
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          {pageData.title}
        </h1>

        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Editor-tested • Best value • Limited-time deals
        </p>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="flex flex-col items-center gap-14 px-4">
        {pageData.product?.map((item: any, index: number) => {
          const link = buildAmazonUrl(item.link, STATIC_TAG);
          const imageUrl =
            item.image?.formats?.large?.url ||
            item.image?.formats?.medium?.url ||
            item.image?.url;

          return (
            <div
              key={item.id}
              className="w-full max-w-[560px] bg-white dark:bg-neutral-800 rounded-2xl shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:shadow-neutral-700/50 transition-all duration-300 overflow-hidden border border-transparent dark:border-neutral-700"
            >
              {/* IMAGE */}
              <div className="relative group">
                {index === 0 && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    ⭐ Editor’s Choice
                  </span>
                )}

                <a href={link} target="_blank" rel="noopener noreferrer" className="block relative">
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full transition-transform duration-500 group-hover:scale-105 cursor-pointer mix-blend-multiply dark:mix-blend-normal"
                  />
                </a>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-center">
                  {item.title}
                </h2>

                <div className="flex justify-center gap-1 text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>

                <div className="text-neutral-700 dark:text-neutral-300 space-y-1">
                  {item.descriptionfield1 && <p>{item.descriptionfield1}</p>}
                  {item.descriptionfield2 && <p>{item.descriptionfield2}</p>}
                  {item.descriptionfield3 && <p>{item.descriptionfield3}</p>}
                  {item.descriptionfield4 && <p>{item.descriptionfield4}</p>}
                </div>

                <div className="flex justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  🚚 Fast Shipping • 🔒 Secure Checkout
                </div>

                {/* CTA */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-[rgb(3,145,133)] hover:bg-[rgb(2,120,110)] text-white font-extrabold text-lg py-[16px] rounded-xl border border-black dark:border-neutral-700 flex justify-center items-center relative overflow-hidden animate-pulseCTA before:content-[''] before:absolute before:top-[-150%] before:left-[-150%] before:w-full before:h-[50%] before:bg-[rgba(255,255,255,0.3)] before:-rotate-45 before:animate-myshine cursor-pointer"
                >
                  VIEW ON AMAZON →
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= STICKY CTA ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-800 border-t dark:border-neutral-700 shadow-lg md:hidden">
        {pageData.product?.[0] && (
          <a
            href={buildAmazonUrl(pageData.product[0].link, STATIC_TAG)}
            target="_blank"
            rel="noopener noreferrer"
            className="m-3 bg-[rgb(3,145,133)] hover:bg-[rgb(2,120,110)] text-white font-extrabold py-4 rounded-xl flex justify-center items-center border border-black dark:border-neutral-700 animate-pulseCTA cursor-pointer"
          >
            🔥 View Best Deal on Amazon
          </a>
        )}
      </div>

      {/* ================= DISCLAIMER ================= */}
      <section className="px-4 pt-16 pb-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Editorial Note: We independently review all products. If you make a
        purchase through our links, we may receive a commission.
      </section>
    </div>
  );
}
