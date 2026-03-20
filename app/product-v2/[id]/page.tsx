import React from 'react';
import { notFound } from 'next/navigation';
import ClientTimer from '@/components/ClientTimer';


interface ProductV2Data {
  image?: { url: string; formats?: any };
  headerText?: string;
  title?: string;
  descriptionMini1?: string;
  descriptionMini2?: string;
  isTimerOn?: boolean;
  descriptionfield1?: string;
  descriptionfield2?: string;
  descriptionfield3?: string;
  descriptionfield4?: string;
  link?: string;
  country?: string;
}

const buildAmazonUrl = (url: string | undefined, tag: string) => {
  if (!url) return '#';
  let finalTag = tag;
  if (finalTag.includes('spainstore0f-21')) {
    finalTag = 'spainstore0f-21';
  }
  const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
  try {
    const urlObj = new URL(cleanUrl);
    urlObj.searchParams.set('tag', finalTag);
    return urlObj.toString();
  } catch (e) {
    const separator = cleanUrl.includes('?') ? '&' : '?';
    return `${cleanUrl}${separator}tag=${finalTag}`;
  }
};

const renderMiniDesc1 = (text?: string) => {
  if (!text) return null;
  const parts = text.split(/(HIGH)/i);
  return parts.map((part, i) =>
    part.toUpperCase() === 'HIGH' ? (
      <span key={i} className="text-red-500 font-bold uppercase transition-colors">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const renderMiniDesc2 = (text?: string) => {
  if (!text) return null;
  const parts = text.split(/(FREE)/i);
  return parts.map((part, i) =>
    part.toUpperCase() === 'FREE' ? (
      <span key={i} className="text-[#0b7b3c] font-bold uppercase">
        {part}
      </span>
    ) : (
      part
    )
  );
};

export default async function ProductV2Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const STATIC_TAG = 'niceadvice-20';

  let productData: ProductV2Data | null = null;

  try {
    const res = await fetch(`https://api.nice-advice.info/get-product-v2/${id}`, {
      cache: 'no-store',
    });
    
    if (res.status === 404) {
      notFound();
    }
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    productData = data.data;
  } catch (error) {
    console.error('❌ Error fetching product-v2:', error);
    notFound();
  }

  if (!productData) {
    notFound();
  }

  const amazonLink = buildAmazonUrl(productData.link, STATIC_TAG);
  const imageUrl =
    productData?.image?.formats?.large?.url ||
    productData?.image?.formats?.medium?.url ||
    productData?.image?.url;

  return (
    <div className="flex flex-col justify-center items-center p-5 gap-4 md:gap-8 max-w-[1000px] mx-auto min-h-screen">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Top Amazon Logo moved outside the border */}
        <div className="flex flex-col items-center justify-center mb-4 w-[160px] md:w-[200px]">
          <img src="/assets/img/amazon.png" alt="Amazon" className="w-full object-contain dark:brightness-0 dark:invert" />
        </div>

        {/* Main Content Container with special Dashed Border matching screenshot */}
        <div className="w-full bg-[#f2f4f8] dark:bg-neutral-800 rounded-xl border-[2px] border-dashed border-[#1f2937] dark:border-neutral-500 pt-4 px-2 pb-2 md:py-6 md:px-3 lg:px-6 flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full gap-3 lg:gap-5 mt-2 items-stretch">
            {/* Left Image Section */}
            <div className="w-full md:flex-1 flex justify-center items-center">
              <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
                <img
                  id="cta-image"
                  src={imageUrl}
                  className="w-full aspect-square object-cover rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                  alt={productData.title || 'Product'}
                />
              </a>
            </div>

            {/* Right Info Section */}
            <div className="w-full md:flex-1 flex flex-col justify-center items-center text-center mt-4 md:mt-0 px-2 lg:px-4">
              {productData?.headerText && (
                <p className="text-[#e11d48] dark:text-rose-400 font-bold text-sm md:text-base uppercase tracking-wider mb-2">
                  {productData.headerText} 🚨
                </p>
              )}

              {productData?.title && (
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-6 leading-snug">
                  {productData.title}
                </h1>
              )}

              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded bg-[#0b7b3c] hover:bg-[#07592b] text-white text-lg md:text-xl font-bold relative border border-transparent flex justify-center items-center transition-colors duration-300 overflow-hidden mb-6 uppercase tracking-wide
                  before:content-[''] before:absolute before:top-[-150%] before:left-[-150%] before:w-full before:h-[50%] before:bg-[rgba(255,255,255,0.3)] before:-rotate-45 before:animate-myshine font-inter cursor-pointer"
              >
                VIEW ON AMAZON
              </a>

              <div className="w-full bg-[#e2e8f0] dark:bg-neutral-700 rounded-md py-3 px-2 flex justify-center items-center text-sm md:text-base text-neutral-700 dark:text-neutral-200 shadow-inner mb-6">
                <span className="text-center w-[45%]">
                  {renderMiniDesc1(productData.descriptionMini1)}
                </span>
                <span className="text-neutral-400 mx-2">|</span>
                <span className="text-center w-[45%]">
                  {renderMiniDesc2(productData.descriptionMini2)}
                </span>
              </div>

              {productData?.isTimerOn && <ClientTimer />}
            </div>
          </div>
        </div>

        {/* Descriptions Section below the dotted box */}
        <div className="w-full flex flex-col items-center mt-8 text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed px-2 md:px-0">
          <div className="inline-flex flex-col items-start mx-auto w-[95%] md:w-fit max-w-full">
            {productData.descriptionfield1 && (
              <p className="mb-5 text-left">{productData.descriptionfield1}</p>
            )}
            {productData.descriptionfield2 && (
              <p className="mb-5 text-left">{productData.descriptionfield2}</p>
            )}
            {productData.descriptionfield3 && (
              <p className="mb-5 text-left">{productData.descriptionfield3}</p>
            )}
            {productData.descriptionfield4 && (
              <p className="mb-5 text-left">{productData.descriptionfield4}</p>
            )}
          </div>

          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-5 mt-4 rounded-lg bg-[#0b7b3c] hover:bg-[#07592b] text-white text-xl md:text-2xl font-bold relative border border-transparent flex justify-center items-center transition-colors duration-300 overflow-hidden mb-6 uppercase tracking-wide
              before:content-[''] before:absolute before:top-[-150%] before:left-[-150%] before:w-full before:h-[50%] before:bg-[rgba(255,255,255,0.3)] before:-rotate-45 before:animate-myshine font-inter cursor-pointer"
          >
            VIEW ON AMAZON
          </a>

          <p className="border dark:border-neutral-700 p-3 w-full text-center text-sm md:text-base text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            Editorial Note: We independently review all products. If you make a purchase through our links, we may receive a commission
          </p>
        </div>
      </div>
    </div>
  );
}
