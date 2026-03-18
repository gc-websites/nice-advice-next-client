import Link from 'next/link';
import { getSearchedPosts } from '@/services/postsAPI';
import Pagination from '@/components/Pagination';
import RenderDescription from '@/components/RenderDescription';

export default async function Search({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const { query, page } = await searchParams;
  const currentPage = Number(page) || 1;
  const pageSize = 10;

  let postsData;
  
  if (query && query.length >= 3) {
    try {
      postsData = await getSearchedPosts(query, currentPage, pageSize);
    } catch (error) {
      console.error('Failed to fetch search results:', error);
    }
  }

  const posts = postsData?.data || [];
  const pageCount = postsData?.meta?.pagination?.pageCount || 1;

  return (
    <section className="container pt-12">
      <h2 className="section__title mb-6 text-mainText dark:text-white break-words">
        Search results for: "{query || ''}"
      </h2>
      
      {posts.length > 0 ? (
        <div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 h-full">
              {posts.map((post: any) => (
                <Link
                  key={post.documentId}
                  href={`/post/${post.documentId}`}
                  className="group p-4 hover:shadow-lg rounded-lg bg-white dark:bg-additionalText transition duration-300 flex flex-col"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={post.image?.url}
                      alt={post.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="mt-3 flex flex-col gap-4">
                    <h3 className="section__title text-2xl md:text-3xl text-mainText dark:text-white">
                      {post.title}
                    </h3>
                    <RenderDescription
                      description={post.description}
                      className="section__description text-base"
                      truncate={true}
                    />
                    <p className="section__description text-main dark:text-main text-base">
                      Read more
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          {pageCount > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={pageCount}
              basePath="/search"
            />
          )}
        </div>
      ) : (
        <p className="section__description">
          {(!query || query.length < 3) 
            ? 'Please enter at least 3 characters to search.' 
            : 'Nothing found 😕'}
        </p>
      )}
    </section>
  );
}
