import BlogDetails from '@/components/Blog/BlogDetails';
import { IBlog } from '@/types';

export async function generateStaticParams() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/blogs'
  );

  const blog = await res.json();

  return blog.data.slice(0, 3).map((blog: IBlog) => ({
    blogId: blog._id,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(
    `https://next-portfolio-server-bay.vercel.app/api/v1/blogs/${blogId}`
  );

  const blog = await res.json();

  return {
    title: blog.data.title,
    description: blog.data.description,
  };
}

async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(
    `https://next-portfolio-server-bay.vercel.app/api/v1/blogs/${blogId}`
  );

  const blog = await res.json();

  return (
    <div>
      <BlogDetails isPublic={true} post={blog.data} />
    </div>
  );
}

export default BlogDetailsPage;
