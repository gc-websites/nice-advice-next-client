import Link from 'next/link';
import { getNewPosts, getPost, getRelatedPosts } from '@/services/postsAPI';

import dot from '@/public/assets/svg/dot.svg';
import Image from 'next/image';

import { notFound } from 'next/navigation';
import Disclaimer from '@/views/Disclaimer';
// import HorizontalAdBanner from '@/views/HorizontalAdBanner';
import RenderDescription from '@/components/RenderDescription';
// import AdList from '@/components/AdList';
import InfinitePost from '@/components/InfinitePost';
import LiveViewerCount from '@/components/LiveViewerCount';
import { SocketProvider } from '@/components/SocketProvider';

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = await params;
  
  let post;
  let relatedPostsList = [];
  let postIds = [];

  try {
    const [postData, related, ids] = await Promise.all([
      getPost(postId),
      getRelatedPosts(),
      getNewPosts()
    ]);
    post = postData.data;
    relatedPostsList = related.data || [];
    postIds = (ids.data || []).map((p: any) => String(p.documentId));
  } catch (error) {
    console.error('Error fetching post data in Server Component:', error);
  }

  if (!post || Object.keys(post).length === 0) {
    notFound();
  }

  const filteredPostIds = postIds?.filter(id => id !== postId);

  return (
    <SocketProvider initialPostId={postId}>
      <div className="flex flex-col gap-8">
        <section className="container grid md:grid-cols-[70%_30%] gap-6 py-10">
          <div className="group p-4 rounded-lg h-full bg-white dark:bg-additionalText flex flex-col">
            <div className="flex items-center py-4 flex-wrap gap-4">
              <Link
                href={`/author/${post.author?.documentId}`}
                className="flex items-center flex-wrap gap-4"
              >
                <Image
                  src={post.author?.avatar?.url || '/fallback-avatar.png'}
                  alt={post.author?.name || 'Author'}
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 object-cover block"
                />
                <div className="section__title underline hover:text-main transition text-base font-bold">
                  {post.author?.name}
                </div>
              </Link>
              <Image src={dot?.src || dot} alt="dot" width={8} height={8} className="w-2 h-2" />
              <p className="section__description text-additionalText text-sm">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date(post.createdAt))}
              </p>
            </div>

            <h2 className="section__title text-4xl text-mainText dark:text-white mb-4">
              {post.title}
            </h2>
            <span className="section__title block text-2xl text-main dark:text-main mb-6">
              {post.category?.name}
            </span>

            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg relative bg-gray-100 dark:bg-gray-800">
              {post.image?.url && (
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover object-center transform"
                />
              )}
            </div>

            <div className="mt-6 flex flex-col gap-4 pb-4">
              <RenderDescription
                description={post.description}
                className="section__description text-base"
                truncate={false}
              />

              {post.paragraphs && post.paragraphs.map(
                ({ id, subtitle, description, image, ads }) => (
                  <div key={id} className="pt-6 flex flex-col gap-4 relative">
                    <h3 className="section__title text-2xl text-mainText dark:text-white">
                      {subtitle}
                    </h3>

                    <RenderDescription
                      description={description}
                      className="section__description text-base"
                      truncate={false}
                    />

                    {image?.url && (
                      <div className="w-full relative aspect-[4/3]">
                        <Image
                          src={image.url}
                          alt={subtitle || 'Post image'}
                          fill
                          sizes="(max-width: 768px) 100vw, 70vw"
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full">
            {relatedPostsList.slice(0, 4).map((rpost: any) => (
              <Link
                key={rpost.documentId}
                href={`/post/${rpost.documentId}`}
                className="group p-4 hover:shadow-lg rounded-lg bg-white dark:bg-additionalText transition duration-300 flex flex-col"
              >
                <div className="flex items-center pb-2 flex-wrap gap-3">
                  <Image
                    src={rpost.author?.avatar?.url || '/fallback-avatar.png'}
                    alt={rpost.author?.name || 'Author'}
                    width={36}
                    height={36}
                    className="rounded-full w-9 h-9 object-cover block"
                  />
                  <div className="section__title text-sm font-bold">
                    {rpost.author?.name}
                  </div>
                  <Image src={dot?.src || dot} alt="dot" width={8} height={8} className="w-2 h-2" />
                  <p className="section__description text-additionalText text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    }).format(new Date(rpost.createdAt))}
                  </p>
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-3 relative bg-gray-100 dark:bg-gray-800">
                  {rpost.image?.url && (
                    <Image
                      src={rpost.image.url}
                      alt={rpost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-center transform group-hover:scale-105 transition duration-300"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                  <LiveViewerCount documentId={rpost.documentId} />
                  <h3 className="section__title text-lg text-mainText dark:text-white">
                    {rpost.title}
                  </h3>
                  <RenderDescription
                    description={rpost.description}
                    className="section__description text-sm"
                    truncate={true}
                  />
                  <p className="section__description text-main dark:text-main text-sm mt-auto">
                    Read more
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Disclaimer />

        <InfinitePost postIds={filteredPostIds} />
      </div>
    </SocketProvider>
  );
}
