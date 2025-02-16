import BlogDetails from '@/components/Blog/BlogDetails';

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
    <div className="2xl:max-w-[1526px] mx-auto p-6">
      <BlogDetails post={blog.data} />
    </div>
  );
}

export default BlogDetailsPage;
