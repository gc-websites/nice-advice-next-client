const BASE_URL = 'https://vivid-triumph-4386b82e17.strapiapp.com/api';
// const BASE_URL = 'http://localhost:1337/api';

const DEFAULT_CACHE = { next: { revalidate: 60 } };

export const getProtectedPassword = async () => {
  try {
    const res = await fetch(`${BASE_URL}/protected-page`, DEFAULT_CACHE);
    if (!res.ok) throw new Error('Failed to fetch protected password');
    const data = await res.json();
    return data?.data?.password || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories?populate[image][populate]=*`, DEFAULT_CACHE);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};

export const getPopularPosts = async () => {
  const res = await fetch(
    `${BASE_URL}/posts?populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=5`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch popular posts');
  return res.json();
};

export const getPost = async (documentId: string) => {
  const res = await fetch(
    `${BASE_URL}/posts/${documentId}?populate[paragraphs][populate]=image&populate[category][populate]=image&populate[image][populate]=*&populate[ads][populate]=*&populate[firstAdBanner][populate]=image&populate[secondAdBanner][populate]=image&populate[author][populate]=avatar&populate[comments]=*`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error(`Failed to fetch post ${documentId}`);
  return res.json();
};


export const getRelatedPosts = async () => {
  const res = await fetch(
    `${BASE_URL}/posts?populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*&filters[isPopular][$eq]=true&pagination[page]=1&pagination[pageSize]=4`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch related posts');
  return res.json();
};

export const getCategory = async (documentId: string) => {
  const res = await fetch(`${BASE_URL}/categories/${documentId}?populate[image][populate]=*`, DEFAULT_CACHE);
  if (!res.ok) throw new Error('Failed to fetch category');
  return res.json();
};

export const getPostsByCategory = async (
  categoryDocumentId: string,
  page = 1,
  pageSize = 10
) => {
  const res = await fetch(
    `${BASE_URL}/posts?filters[category][documentId][$eq]=${categoryDocumentId}&sort[0]=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch posts by category');
  return res.json();
};

export const getAuthor = async (authorDocumentId: string) => {
  const res = await fetch(`${BASE_URL}/authors/${authorDocumentId}?populate[avatar][populate]=*`, DEFAULT_CACHE);
  if (!res.ok) throw new Error('Failed to fetch author');
  return res.json();
};

export const getPostsByAuthor = async (
  authorDocumentId: string,
  page = 1,
  pageSize = 10
) => {
  const res = await fetch(
    `${BASE_URL}/posts?filters[author][documentId][$eq]=${authorDocumentId}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch posts by author');
  return res.json();
};

export const getSearchedPosts = async (query: string, page = 1, pageSize = 10) => {
  const res = await fetch(
    `${BASE_URL}/posts?filters[title][$containsi]=${query}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch searched posts');
  return res.json();
};

export const getNewPosts = async (page = 1, pageSize = 10) => {
  const res = await fetch(
    `${BASE_URL}/posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[category][populate]=image&populate[author][populate]=avatar&populate[image][populate]=*&sort[0]=publishedAt:desc`,
    DEFAULT_CACHE
  );
  if (!res.ok) throw new Error('Failed to fetch new posts');
  return res.json();
};

export const signUpForNewsletter = async (email: string) => {
  // Post requests shouldn't be cached
  const res = await fetch(`${BASE_URL}/newsletters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { email: email } }),
  });
  if (!res.ok) throw new Error('Failed to sign up for newsletter');
  return res.json();
};
