import Link from 'next/link';
import Image from 'next/image';
import { getAuthor, getPostsByAuthor } from '@/services/postsAPI';
import { notFound } from 'next/navigation';
import RenderDescription from '@/components/RenderDescription';
import Pagination from '@/components/Pagination';

export default async function Author({
  params,
  searchParams,
}: {
  params: { authorId: string };
  searchParams: { page?: string };
}) {
  const { authorId } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 10;

  let authorData;
  let postsData;

  try {
    const [authorRes, postsRes] = await Promise.all([
      getAuthor(authorId),
      getPostsByAuthor(authorId, currentPage, pageSize)
    ]);
    authorData = authorRes.data;
    postsData = postsRes;
  } catch (error) {
    console.error('Failed to fetch author data:', error);
  }

  if (!authorData || Object.keys(authorData).length === 0) {
    notFound();
  }

  const posts = postsData?.data || [];
  const pageCount = postsData?.meta?.pagination?.pageCount || 1;

  return (
    <div>
      <section>
        <div className="bg-main pt-16 md:pt-36 pb-10">
          <div className="relative container">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <p className="section__title pb-8 text-white text-3xl font-normal">
                  Writer
                </p>
                <h4 className="section__title text-white text-4xl md:text-6xl">
                  {authorData.name}
                </h4>
              </div>
              {authorData.avatar?.url && (
                <div className="absolute md:top-8 -top-12 right-12 sm:right-0 w-28 h-28 sm:w-32 sm:h-32 md:w-64 md:h-64">
                  <Image
                    src={authorData.avatar.url}
                    alt={authorData.name}
                    fill
                    sizes="(max-width: 768px) 128px, 256px"
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container mt-8">
          <div className="max-w-full md:max-w-[70%]">
            <RenderDescription
              description={authorData.description}
              className="section__description"
              truncate={false}
            />
          </div>
        </div>
        <div className="container section__padding">
          <h4 className="section__title pb-4 text-2xl md:text-3xl">
            Latest from {authorData.name}:
          </h4>
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
                  <p className="section__description text-main dark:text-main text-base mt-auto">
                    Read more
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {pageCount > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={pageCount}
              basePath={`/author/${authorId}`}
            />
          )}
        </div>
      </section>
    </div>
  );
}
