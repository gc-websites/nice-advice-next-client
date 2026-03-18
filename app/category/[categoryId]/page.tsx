import Link from 'next/link';
import Image from 'next/image';
import {
  getCategory,
  getPostsByCategory,
  getRelatedPosts,
} from '@/services/postsAPI';
import { notFound } from 'next/navigation';
import Pagination from '@/components/Pagination';
import Disclaimer from '@/views/Disclaimer';
import RenderDescription from '@/components/RenderDescription';
import { SocketProvider } from '@/components/SocketProvider';
import LiveViewerCount from '@/components/LiveViewerCount';

export default async function Category({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { page?: string };
}) {
  const { categoryId } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 10;

  let categoryData;
  let postsData;
  let relatedPosts = [];

  try {
    const [categoryRes, postsRes, relatedRes] = await Promise.all([
      getCategory(categoryId),
      getPostsByCategory(categoryId, currentPage, pageSize),
      getRelatedPosts()
    ]);
    
    categoryData = categoryRes.data;
    postsData = postsRes;
    relatedPosts = relatedRes.data || [];
  } catch (error) {
    console.error('Error fetching category data:', error);
  }

  if (!categoryData || Object.keys(categoryData).length === 0) {
    notFound();
  }

  // Next.js reverses arrays in memory during render, but it's better to sort in Strapi. 
  // We'll reverse here to maintain existing behavior for now.
  const posts = postsData?.data?.reverse() || [];
  const pageCount = postsData?.meta?.pagination?.pageCount || 1;

  return (
    <SocketProvider>
      <section className="container mx-auto py-8">
        <div>
          <div>
            <div className="relative vignette-container">
              {categoryData.image?.url && (
                <div className="w-full relative h-64 md:h-96 mb-6">
                  <Image
                    src={categoryData.image.url}
                    alt={categoryData.name}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-center rounded"
                  />
                </div>
              )}
              <div className="absolute bottom-6 left-0 w-full bg-black/50 p-4 z-40 rounded">
                <h2 className="section__title text-white md:text-4xl text-xl font-bold text-left">
                  {categoryData.name}
                </h2>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 h-full">
                {posts?.map((post: any) => (
                  <Link
                    key={post.documentId}
                    href={`/post/${post.documentId}`}
                    className="group p-4 hover:shadow-lg rounded-lg bg-white dark:bg-additionalText transition duration-300 flex flex-col"
                  >
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg relative bg-gray-100 dark:bg-gray-800">
                      {post.image?.url && (
                        <Image
                          src={post.image.url}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transform group-hover:scale-105 transition duration-300"
                        />
                      )}
                    </div>
                    <div className="mt-3 flex flex-col gap-4 flex-grow">
                      <h3 className="section__title text-2xl md:text-3xl text-mainText dark:text-white">
                        {post.title}
                      </h3>
                      <RenderDescription
                        description={post.description}
                        className="section__description text-base"
                        truncate={true}
                      />
                      <div className="flex justify-between items-center mt-auto">
                        <p className="section__description text-main dark:text-main text-base">
                          Read more
                        </p>
                        <LiveViewerCount documentId={post.documentId} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {pageCount > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={pageCount}
                basePath={`/category/${categoryId}`}
              />
            )}
          </div>
        </div>
      </section>
      <Disclaimer />
    </SocketProvider>
  );
}
