import BlogDetails from '@/components/Blog/BlogDetails';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`);

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

  const res = await fetch(`http://localhost:5000/api/v1/blogs/${blogId}`);

  const blog = await res.json();

  return (
    <div>
      <BlogDetails post={blog.data} />
    </div>
  );
}

export default BlogDetailsPage;
