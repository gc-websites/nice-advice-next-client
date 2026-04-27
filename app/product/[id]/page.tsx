import React from 'react';
import { notFound } from 'next/navigation';
import AdSense from '@/components/AdSense';

interface ProductData {
  image?: { url: string; formats?: any };
  title?: string;
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

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const STATIC_TAG = 'niceadvice-20';

  let productData: ProductData | null = null;

  try {
    const res = await fetch(`https://api.nice-advice.info/get-product/${id}`, {
      cache: 'no-store',
    });
    
    if (res.status === 404) {
      notFound();
    }
    
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await res.json();
    productData = data.data;
  } catch (error) {
    console.error('❌ Error fetching product:', error);
    // If it's a 404 it will be caught above, otherwise we might still want to show not found or error
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
    <div className="flex flex-col md:flex-row justify-center items-start p-5 gap-4 md:gap-8 max-w-[1440px] mx-auto">
      {/* Left Ad - Desktop Only */}
      <AdSense slot="7699598053" className="hidden md:block w-[160px] lg:w-[300px] shrink-0 sticky top-5" />

      <div className="flex flex-col justify-center items-center w-full md:w-[50vw] lg:w-[40vw]">
        {/* Mobile Ad - Mobile Only (Top) */}
        <AdSense slot="6223090192" className="block md:hidden w-full mb-6" format="horizontal" />

        <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="w-full relative block">
          <img
            id="cta-image"
            src={imageUrl}
            alt={productData.title || 'Product'}
            className="w-full aspect-video object-cover rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          />
        </a>

        <h1 className="text-2xl md:text-3xl text-center font-bold w-full mb-[1rem] mt-[1rem]">
          {productData.title}
        </h1>

        <a
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 font-bold text-xl md:text-2xl hover:underline mb-6 block text-center uppercase tracking-wider cursor-pointer"
        >
          EXPLORE DEALS
        </a>

        <div className="w-full flex flex-col items-center">
          <p className="w-full md:w-[90%] mb-4">{productData.descriptionfield1}</p>
          <p className="w-full md:w-[90%] mb-4">{productData.descriptionfield2}</p>
          <p className="w-full md:w-[90%] mb-4">{productData.descriptionfield3}</p>
          <p className="w-full md:w-[90%] mb-4">{productData.descriptionfield4}</p>
        </div>

        <a
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-5 m-5 rounded bg-[rgb(3,145,133)] text-2xl font-bold relative bg-[#eaa31e] border border-black rounded-lg py-[15px] px-[20px] mb-[10px] flex justify-center items-center transition-colors duration-300 overflow-hidden text-[17px] hover:bg-[#c47f00] before:content-[''] before:absolute before:top-[-150%] before:left-[-150%] before:w-full before:h-[50%] before:bg-[rgba(255,255,255,0.3)] before:-rotate-45 before:animate-myshine font-inter cursor-pointer"
        >
          VIEW ON AMAZON
        </a>

        <p className="border p-2 w-full text-center">
          Editorial Note: We independently review all products. If you make a purchase through our links, we may receive a commission
        </p>
      </div>

      {/* Right Ad - Desktop Only */}
      <AdSense slot="7699598053" className="hidden md:block w-[160px] lg:w-[300px] shrink-0 sticky top-5" />
    </div>
  );
}
