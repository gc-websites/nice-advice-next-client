import Hero from '@/views/Hero';
import Categories from '@/views/Categories';
import About from '@/views/About';
import Disclaimer from '@/views/Disclaimer';
import SearchBar from '@/views/SearchBar';
import Newsletter from '@/views/Newsletter';
import { getCategories, getPopularPosts } from '@/services/postsAPI';

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
      <Categories categories={categories} />
      <About />
      <Newsletter />
      <Disclaimer />
    </div>
  );
}
