import Link from 'next/link';
import Image from 'next/image';
import dot from '@/public/assets/svg/dot.svg';
import RenderDescription from '../components/RenderDescription';

interface HeroProps {
  popularPosts: any[];
}

const Hero = ({ popularPosts }: HeroProps) => {
  if (!popularPosts || popularPosts.length === 0) {
    return null;
  }
  return (
    <section className="container section__padding pt-0">
      <h1 className="section__title mb-6 invisible">Nice Advice</h1>
      {popularPosts && popularPosts.length > 0 && (
        <div className="grid md:grid-cols-[70%_30%] gap-6">
          <Link
            href={`/post/${popularPosts[0].documentId}`}
            className="group p-4 hover:shadow-lg rounded-lg h-full bg-white dark:bg-additionalText  flex flex-col"
          >
            <div className="flex items-center py-4 flex-wrap gap-4">
              {popularPosts[0].author?.avatar?.url ? (
                <Image
                  src={popularPosts[0].author.avatar.url}
                  alt={popularPosts[0].author.name}
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 object-cover block"
                />
              ) : (
                <div className="rounded-full w-12 h-12 bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
              )}
              <div className="section__title text-base font-bold">
                <p className="text-mainText dark:text-white">
                  {popularPosts[0].author?.name}
                </p>
              </div>
              <Image src={dot?.src || dot} alt="dot" width={8} height={8} className="w-2 h-2" />
              <p className="section__description text-additionalText text-sm">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                }).format(new Date(popularPosts[0].createdAt))}
              </p>
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 relative">
              {popularPosts[0].image?.url && (
                <Image
                  src={popularPosts[0].image?.formats?.large?.url || popularPosts[0].image?.formats?.medium?.url || popularPosts[0].image.url}
                  alt={popularPosts[0].title}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover object-center transform group-hover:scale-105 transition duration-300"
                />
              )}
            </div>
            <div className="mt-6 flex flex-col gap-4 pb-4">
              <h2 className="section__title text-3xl text-mainText dark:text-white">
                {popularPosts[0].title}
              </h2>
              <RenderDescription
                description={popularPosts[0].description}
                className="section__description text-base"
                truncate={true}
              />
              <p className="section__description text-main dark:text-main">
                Read more
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-6 h-full">
            {popularPosts.slice(1, 3).map(post => (
              <Link
                key={post.documentId}
                href={`/post/${post.documentId}`}
                className="group p-4 hover:shadow-lg rounded-lg bg-white dark:bg-additionalText transition duration-300 flex flex-col flex-1"
              >
                <div className="flex items-center pb-2 flex-wrap gap-3">
                  {post.author?.avatar?.url ? (
                    <Image
                      src={post.author?.avatar?.formats?.thumbnail?.url || post.author.avatar.url}
                      alt={post.author.name}
                      width={36}
                      height={36}
                      className="rounded-full w-9 h-9 object-cover block"
                    />
                  ) : (
                    <div className="rounded-full w-9 h-9 bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                  )}
                  <div className="section__title text-sm font-bold">
                    <p className="text-mainText dark:text-white">
                      {post.author?.name}
                    </p>
                  </div>
                  <Image src={dot?.src || dot} alt="dot" width={8} height={8} className="w-2 h-2" />
                  <p className="section__description text-additionalText text-xs">
                    {new Intl.DateTimeFormat('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    }).format(new Date(post.createdAt))}
                  </p>
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 relative">
                  {post.image?.url && (
                    <Image
                      src={post.image?.formats?.medium?.url || post.image?.formats?.small?.url || post.image.url}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover object-center transform group-hover:scale-105 transition duration-300"
                    />
                  )}
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <h3 className="section__title text-lg text-mainText dark:text-white">
                    {post.title}
                  </h3>
                  <RenderDescription
                    description={post.description}
                    className="section__description text-sm"
                    truncate={true}
                  />
                  <p className="section__description text-main dark:text-main text-sm">
                    Read more
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
