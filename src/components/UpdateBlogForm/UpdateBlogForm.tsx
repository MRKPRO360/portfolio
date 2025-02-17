'use client';
import { BlogFormInput } from '@/types';
import { useForm } from 'react-hook-form';
import Cta from '../Cta/Cta';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function UpdateBlogForm({ blogId }: { blogId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormInput>({ mode: 'onBlur' });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/blogs/${blogId}`
      );
      const blog = await res.json();

      reset(blog.data);
    };

    fetchBlog();
  }, [blogId, reset]);

  const onSubmit = async (data: BlogFormInput) => {
    const toastId = toast.loading('Updating ...');

    try {
      setLoading(true);

      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/blogs/${blogId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const blogInfo = await res.json();

      setLoading(false);

      reset();
      if (blogInfo.success) {
        toast.success('Blog updated successfully', { id: toastId });
        router.push('/dashboard/blog');
      } else toast.error(blogInfo.message, { id: toastId });
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mt-4 mx-auto p-6 bg-backgroundLight shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Update Blog Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            {...register('title', { required: 'A title must have a title' })}
            className="border p-2 w-full rounded text-backgroundDark "
            placeholder="Blog title exmp. Node with code"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Details</label>
          <textarea
            placeholder="Some description..."
            {...register('content', {
              required: 'Details is required!',
              minLength: {
                value: 10,
                message: 'Details should be at least 10 characters',
              },
            })}
            className="border p-2 w-full rounded text-backgroundDark "
            rows={4}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Tag</label>
          <select
            {...register('tag')}
            className="border p-2 w-full rounded text-backgroundDark"
            defaultValue={'Technology'}
          >
            {' '}
            <option value="">Select a tag</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <Cta disabled={loading} fullWidth={true} text="Submit" />
      </form>
    </div>
  );
}

export default UpdateBlogForm;
