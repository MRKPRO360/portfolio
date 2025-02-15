import UpdateBlogForm from '@/components/UpdateBlogForm/UpdateBlogForm';

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

async function BlogEditPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  return (
    <div>
      <UpdateBlogForm blogId={blogId} />
    </div>
  );
}

export default BlogEditPage;
