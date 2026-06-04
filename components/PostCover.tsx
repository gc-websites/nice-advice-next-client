import Image from 'next/image';

interface StrapiImageFormat {
  url?: string;
}

interface StrapiImage {
  url?: string;
  formats?: Record<string, StrapiImageFormat | undefined>;
}

interface PostCoverProps {
  /** Strapi image object (or null/undefined when the post has no cover). */
  image?: StrapiImage | null;
  /** Post title — shown on the branded fallback cover and used as alt text. */
  title?: string;
  sizes?: string;
  priority?: boolean;
  /** Controls the title size on the fallback cover. */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to apply the group-hover zoom (used by clickable cards). */
  hover?: boolean;
  /** Extra classes applied to the <Image> element. */
  className?: string;
}

const pickImageUrl = (image?: StrapiImage | null): string | null => {
  if (!image) return null;
  const f = image.formats || {};
  return (
    f.medium?.url ||
    f.large?.url ||
    f.small?.url ||
    f.thumbnail?.url ||
    image.url ||
    null
  );
};

const titleSize: Record<NonNullable<PostCoverProps['size']>, string> = {
  sm: 'text-base md:text-lg',
  md: 'text-xl md:text-2xl',
  lg: 'text-2xl md:text-4xl',
};

/**
 * Renders a post cover image, falling back to a branded gradient cover (in the
 * Nice Advice brand colors) with the post title when the post has no image in
 * the CMS — so a missing cover never shows as an empty grey box.
 *
 * Drop this inside the existing `aspect-[4/3] ... relative` container.
 */
const PostCover = ({
  image,
  title = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  size = 'md',
  hover = true,
  className = '',
}: PostCoverProps) => {
  const src = pickImageUrl(image);
  const zoom = hover ? 'group-hover:scale-105 transition duration-300' : '';

  if (src) {
    return (
      <Image
        src={src}
        alt={title}
        fill
        priority={priority}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        sizes={sizes}
        className={`object-cover object-center transform ${zoom} ${className}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-main via-main2 to-main3 p-5 text-center ${zoom}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-14 -left-10 h-44 w-44 rounded-full bg-black/10 blur-2xl"
      />
      <span className="relative z-10 mb-3 font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-white/85">
        Nice Advice
      </span>
      {title ? (
        <h3
          className={`relative z-10 font-merriweather font-bold leading-snug text-white line-clamp-4 [text-wrap:balance] ${titleSize[size]}`}
        >
          {title}
        </h3>
      ) : null}
      <span aria-hidden className="relative z-10 mt-4 h-px w-10 bg-white/50" />
    </div>
  );
};

export default PostCover;
