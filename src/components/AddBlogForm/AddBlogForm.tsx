'use client';
import { BlogFormInput } from '@/types';
import { useForm } from 'react-hook-form';
import Cta from '../Cta/Cta';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';

function AddBlogForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormInput>();

  const onSubmit = async (data: BlogFormInput) => {
    const toastId = toast.loading('Adding ...');

    const formData = new FormData();

    formData.append(
      'data',
      JSON.stringify({
        title: data.title,
        content: data.content,
        tag: data.tag,
        author: data.author,
      })
    );

    // Append cover image (single file)
    if (data.blogImageData.length > 0) {
      formData.append('file', data.blogImageData[0]);
    }

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/v1/blogs', {
        method: 'POST',
        body: formData,
      });

      const blogInfo = await res.json();

      setLoading(false);

      reset();
      if (blogInfo.success)
        toast.success('Blog added successfully', { id: toastId });
      else toast.error(blogInfo.message, { id: toastId });
      router.push('/dashboard/blogs');
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mt-4 mx-auto p-6 bg-backgroundLight shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create a Blog Post</h2>
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
          <label className="block text-sm font-medium">Content</label>
          <textarea
            placeholder="Some description..."
            {...register('content', {
              required: 'A blog should have some descriptions',
            })}
            className="border p-2 w-full rounded text-backgroundDark "
            rows={4}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Author</label>
          <input
            type="text"
            {...register('author', { required: 'A blog must have a author' })}
            className="border p-2 w-full rounded text-backgroundDark "
            placeholder="Auhtor name exmp. James"
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Tag</label>
          <select
            {...register('tag', {
              required: 'Tag is required',
            })}
            className="border p-2 w-full rounded text-backgroundDark "
          >
            {' '}
            <option value="">Select a tag</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
          {errors.tag && (
            <p className="text-red-500 text-sm">{errors.tag.message}</p>
          )}
        </div>

        <div>
          <label className="border p-2 w-full rounded flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
            <Upload className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Upload blog image</span>
            <input
              {...register('blogImageData', {
                required: 'Blog image is required',
              })}
              type="file"
              className="hidden"
            />
          </label>
          {errors.blogImageData && (
            <p className="text-red-500 text-sm mt-1">
              {errors.blogImageData.message}
            </p>
          )}
        </div>

        <Cta disabled={loading} fullWidth={true} text="Submit" />
      </form>
    </div>
  );
}

export default AddBlogForm;
