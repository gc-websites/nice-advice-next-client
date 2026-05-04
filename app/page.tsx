import Hero from '@/views/Hero';
import Categories from '@/views/Categories';
import About from '@/views/About';
import Disclaimer from '@/views/Disclaimer';
import SearchBar from '@/views/SearchBar';
import Newsletter from '@/views/Newsletter';
import AdSense from '@/components/AdSense';
import { getCategories, getPopularPosts } from '@/services/postsAPI';

// Re-generate this page at most every 5 minutes
export const revalidate = 300;

export default async function Home() {
  let categories = [];
  let popularPosts = [];
  try {
    const [categoriesData, popularPostsData] = await Promise.all([
      getCategories(),
      getPopularPosts()
    ]);
    categories = categoriesData?.data || [];
    popularPosts = popularPostsData?.data || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div>
      <Hero popularPosts={popularPosts} />
      <SearchBar />
      <div className="container my-6">
        <AdSense
          slot="6223090192"
          format="auto"
          style={{ display: 'block', minHeight: 250 }}
        />
      </div>
      <Categories categories={categories} />
      <div className="container my-6">
        <AdSense
          slot="6223090192"
          format="auto"
          style={{ display: 'block', minHeight: 250 }}
        />
      </div>
      <About />
      <Newsletter />
      <Disclaimer />
    </div>
  );
}
