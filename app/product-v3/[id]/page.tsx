import React from 'react';
import { notFound } from 'next/navigation';

const normalizeUrl = (url: string) => {
  if (!url) return '#';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
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

export default async function ProductV3Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const STATIC_TAG = 'niceadvice-20';

  let pageData: any = null;

  try {
    const res = await fetch(`https://api.nice-advice.info/get-product-v3/${id}`, {
      cache: 'no-store',
    });
    
    if (res.status === 404) {
      notFound();
    }
    
    if (!res.ok) {
      throw new Error('Failed to fetch Product V3');
    }
    const data = await res.json();
    pageData = data.data;
  } catch (error) {
    console.error('❌ Error fetching Product V3:', error);
    notFound();
  }

  if (!pageData) {
    notFound();
  }

  const textBlocks = pageData.text
    ? pageData.text.split(/\n\n|\n/).filter((t: string) => t.trim() !== '')
    : [];
  const textFirstPara = textBlocks[0] || '';
  const textRemainingParas = textBlocks.slice(1);

  const subTextBlocks = pageData.subText
    ? pageData.subText.split(/\n\n|\n/).filter((t: string) => t.trim() !== '')
    : [];

  const updateDateMatch = pageData.updatedAt
    ? new Date(pageData.updatedAt)
    : new Date();
  const formattedDate = `${updateDateMatch.getDate().toString().padStart(2, '0')}.${(updateDateMatch.getMonth() + 1).toString().padStart(2, '0')}.${updateDateMatch.getFullYear()}`;

  const defaultRatings = [
    '9.9',
    '9.7',
    '9.5',
    '9.4',
    '9.4',
    '9.2',
    '9',
    '8.9',
    '8.6',
    '8.5',
  ];

  const fallbackImages = [
    'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1572569432705-c68dc4af56b1?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=250&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593642702821-c823b13eb412?q=80&w=250&auto=format&fit=crop',
  ];

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen text-neutral-800 dark:text-neutral-200 font-sans">
      <main className="max-w-[960px] mx-auto pb-16 shadow-lg bg-white dark:bg-neutral-900 relative">
        {/* Title Image & Date overlay */}
        <section className="relative w-full aspect-[21/9] sm:aspect-[3/1] md:aspect-[21/9] bg-neutral-100 dark:bg-neutral-800 mb-6 group">
          {pageData.titleImg && (
            <img
              src={
                pageData.titleImg?.formats?.large?.url || pageData.titleImg?.url
              }
              alt="Hero"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-neutral-800/80 p-1.5 px-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Última actualización: {formattedDate}
          </div>
        </section>

        <div className="px-5 md:px-10">
          {/* H1 Title */}
          {pageData.Title && (
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#333333] dark:text-white mb-6 tracking-tight">
              {pageData.Title}
            </h1>
          )}

          {/* First Text Paragraph */}
          {pageData.text && (
            <p className="text-lg md:text-[19px] text-[#424242] dark:text-neutral-300 leading-relaxed mb-10 block">
              {textFirstPara}
            </p>
          )}

          {/* Mobile Product Cards */}
          <section className="mb-10 w-full block md:hidden space-y-6">
            {pageData.product3?.length > 0 &&
              pageData.product3.map((item: any, idx: number) => {
                const rating = defaultRatings[idx] || '8.5';
                const discount = item.discount || '';
                const imageUrl =
                  item.img?.formats?.thumbnail?.url ||
                  item.img?.url ||
                  fallbackImages[idx % fallbackImages.length];
                const displayTitle = item.title;
                const link = buildAmazonUrl(item.link, STATIC_TAG);

                return (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-[#EBEBEB] dark:border-neutral-700 overflow-hidden relative"
                  >
                    {/* Rank Badge */}
                    <div className="absolute top-0 left-0 bg-[#3bb392] text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-br-xl z-20 shadow-md">
                      {idx + 1}
                    </div>

                    {/* Discount Badge */}
                    {discount && (
                      <div className="absolute top-2 right-2 bg-[#E7873D] text-white text-[11px] font-bold px-2.5 py-1 rounded-full z-20 shadow-sm border border-white">
                        {discount}
                      </div>
                    )}

                    <div className="p-4 flex flex-col items-center">
                      {/* Image */}
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-40 h-40 mb-4 flex justify-center items-center cursor-pointer relative"
                      >
                        <img
                          src={imageUrl}
                          alt={displayTitle}
                          className="max-w-full max-h-full object-contain mix-blend-multiply"
                        />
                      </a>

                      {/* Title */}
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center font-bold text-[16px] text-[#333] dark:text-white hover:underline mb-3 line-clamp-3 leading-snug cursor-pointer block"
                      >
                        {displayTitle}
                      </a>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4 bg-neutral-50 dark:bg-neutral-700 px-4 py-2 rounded-full border border-neutral-100 dark:border-neutral-600">
                        <span className="text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                          Calificación:
                        </span>
                        <span className="text-2xl font-bold text-[#757575] dark:text-neutral-200">
                          {rating}
                        </span>
                        <span className="text-xs text-[#A4A4A4] dark:text-neutral-400 ml-1">
                          /10
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="w-full mt-2">
                        <div className="relative w-[90%] mx-auto">
                          {discount && (
                            <div className="absolute -top-2.5 -right-2 bg-[#EB8934] text-white text-[12px] font-extrabold px-2 py-0.5 rounded-full z-20 shadow-sm leading-none flex items-center justify-center border-[1.5px] border-white">
                              {discount.toString().includes('%')
                                ? discount
                                : `${discount}%`}
                            </div>
                          )}
                          <div className="rounded-full bg-[#EB8934] p-[1.5px] shadow-sm">
                            <div className="rounded-full bg-white p-[2px]">
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center w-full bg-[#5BC5A7] hover:bg-[#49a88e] text-white text-[16px] font-bold py-3 rounded-full uppercase tracking-wide transition-all"
                              >
                                REVISAR PRECIO
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="text-[13px] text-[#555] dark:text-neutral-300 mt-3 mb-2 text-center">
                          em <span className="font-bold text-[#FF9900]">amazon</span>.es
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>

          {/* Desktop Table */}
          <section className="mb-10 w-full overflow-x-auto shadow-sm rounded-md hidden md:block">
            <table className="w-full text-center border-collapse bg-white dark:bg-neutral-800 border border-[#EBEBEB] dark:border-neutral-700 min-w-[700px]">
              <thead className="bg-[#f7f8f8] dark:bg-neutral-700 text-[#767676] dark:text-neutral-300 text-[15px] font-normal h-14">
                <tr>
                  <th className="border border-[#EBEBEB] dark:border-neutral-600 font-normal w-[12%]"></th>
                  <th className="border border-[#EBEBEB] dark:border-neutral-600 font-normal w-[15%]">
                    Imagen
                  </th>
                  <th className="border border-[#EBEBEB] dark:border-neutral-600 font-normal w-[38%]">
                    Nombre
                  </th>
                  <th className="border border-[#EBEBEB] dark:border-neutral-600 font-normal w-[15%]">
                    Calificación
                  </th>
                  <th className="border border-[#EBEBEB] dark:border-neutral-600 font-normal w-[20%] uppercase text-xs tracking-wider font-semibold text-[#8C9095] dark:text-neutral-400">
                    REVISAR PRECIO
                  </th>
                </tr>
              </thead>
              <tbody>
                {pageData.product3?.length > 0 &&
                  pageData.product3.map((item: any, idx: number) => {
                    const rating = defaultRatings[idx] || '8.5';
                    const discount = item.discount || '';
                    const imageUrl =
                      item.img?.formats?.thumbnail?.url ||
                      item.img?.url ||
                      fallbackImages[idx % fallbackImages.length];
                    const displayTitle = item.title;
                    const link = buildAmazonUrl(item.link, STATIC_TAG);

                    return (
                      <tr
                        key={item.id}
                        className="border-b border-[#EBEBEB] dark:border-neutral-700 hover:bg-neutral-50/50 dark:hover:bg-neutral-700/50"
                      >
                        {/* Rank */}
                        <td className="p-2 align-middle border-r border-[#EBEBEB] dark:border-neutral-600">
                          <div className="flex flex-col items-center justify-center">
                            <span className="text-[#3bb392] text-xl md:text-2xl font-light">
                              {idx + 1}
                            </span>
                            <span className="text-[#A4A4A4] dark:text-neutral-400 text-[10px] md:text-xs mt-0.5">
                              di {pageData.product3.length}
                            </span>
                          </div>
                        </td>
                        <td className="p-2 align-middle border-r border-[#EBEBEB] dark:border-neutral-600 w-[15%]">
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 md:w-[70px] md:h-[70px] mx-auto cursor-pointer flex justify-center items-center block"
                          >
                            <img
                              src={imageUrl}
                              alt={item.title}
                              className="max-w-full max-h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                            />
                          </a>
                        </td>
                        <td className="p-2 px-3 align-middle text-left border-r border-[#EBEBEB] dark:border-neutral-600 text-[#555] dark:text-neutral-300 w-[38%]">
                          <div className="md:h-[48px] overflow-hidden flex items-center">
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer hover:underline text-sm md:text-[14px] leading-tight line-clamp-2 md:line-clamp-2 dark:text-white"
                            >
                              {displayTitle}
                            </a>
                          </div>
                        </td>
                        {/* Rating */}
                        <td className="p-2 align-middle border-r border-[#EBEBEB] dark:border-neutral-600 w-[15%]">
                          <span className="text-2xl md:text-[28px] text-[#757575] dark:text-neutral-200 font-light leading-none">
                            {rating}
                          </span>
                        </td>
                        {/* CTA */}
                        <td className="p-2 align-middle border-r border-[#EBEBEB] dark:border-neutral-600">
                          <div className="relative w-[110px] md:w-[130px] mx-auto mt-2 mb-1">
                            {discount && (
                              <div className="absolute -top-2.5 -right-2 md:-top-3 md:-right-2 bg-[#EB8934] text-white text-[11px] md:text-[12px] font-extrabold px-2 md:px-2.5 py-0.5 rounded-full z-20 shadow-sm leading-none flex items-center justify-center border-[1.5px] border-white">
                                {discount.toString().includes('%')
                                  ? discount
                                  : `${discount}%`}
                              </div>
                            )}
                            <div className="rounded-full bg-[#EB8934] p-[1.5px] md:p-[2px] shadow-sm">
                              <div className="rounded-full bg-white p-[1.5px] md:p-[2px]">
                                <a
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full bg-[#5BC5A7] hover:bg-[#49a88e] text-white text-xs md:text-[13px] font-bold py-1.5 md:py-2 rounded-full transition-colors uppercase tracking-tight text-center"
                                >
                                  REVISAR PRECIO
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="text-[11px] text-[#555] dark:text-neutral-300 mt-1 text-center font-medium">
                            em <span className="font-bold text-[#FF9900]">amazon</span>.es
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </section>

          {/* Remaining Text Paragraphs */}
          {textRemainingParas.length > 0 && (
            <div className="text-lg md:text-[19px] text-[#424242] dark:text-neutral-300 leading-relaxed mb-10 space-y-6">
              {textRemainingParas.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}

          {/* SubTitle */}
          {pageData.subTitle && (
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#333333] dark:text-white mb-6 leading-snug">
              {pageData.subTitle}
            </h2>
          )}

          {/* SubText & SubImage */}
          {(pageData.subImg?.url || subTextBlocks.length > 0) && (
            <div className="clearfix text-lg md:text-[19px] text-[#424242] dark:text-neutral-300 leading-relaxed space-y-6">
              {pageData.subImg?.url && (
                <img
                  src={
                    pageData.subImg?.formats?.medium?.url || pageData.subImg?.url
                  }
                  alt="Sub Hero"
                  className="float-none md:float-right md:w-[45%] w-full h-auto md:ml-6 mb-6 mt-2 object-cover"
                />
              )}
              {subTextBlocks.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
