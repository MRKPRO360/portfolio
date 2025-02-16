import BlogPostCard from '@/components/Blog/BlogPostCard';
import TextHeading from '@/components/TextHeading/TextHeading';
import { IBlog } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Explore Life',
};

async function BlogPage() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/blogs',
    {
      cache: 'force-cache',
    }
  );

  const blogs = await res.json();

  return (
    <div className="mx-auto">
      <div className="mb-8 text-center">
        <TextHeading text="All Blogs" />
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogs.data.map((post: IBlog) => (
          <BlogPostCard isPublic={true} key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
