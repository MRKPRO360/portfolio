import BlogPostCard from '@/components/Blog/BlogPostCard';
import TextHeading from '@/components/TextHeading/TextHeading';
import { IBlog } from '@/types';

async function DashboardBlogPage() {
  const res = await fetch('http://localhost:5000/api/v1/blogs', {
    next: {
      revalidate: 30,
    },
  });

  const blogs = await res.json();

  return (
    <div className=" mx-auto">
      <div className="mb-8 text-center">
        <TextHeading text="All Blogs" />
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogs.data.map((post: IBlog) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default DashboardBlogPage;
