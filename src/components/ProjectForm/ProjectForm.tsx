'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cta from '../Cta/Cta';
import { ProjectFormInputs } from '@/types/index';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Upload } from 'lucide-react';

function ProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormInputs>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: ProjectFormInputs) => {
    const toastId = toast.loading('Hold on a min...');

    const formData = new FormData();

    // Convert text fields
    formData.append(
      'data',
      JSON.stringify({
        name: data.name,
        details: data.details,
        liveLink: data.liveLink,
        githubLink: data.githubLink,
        technologies: data.technologies.split(',').map((tech) => tech.trim()), // Convert string to array
      })
    );

    // Append cover image (single file)
    if (data.coverImage.length > 0) {
      formData.append('coverImage', data.coverImage[0]);
    }

    // Append project images (multiple files)
    Array.from(data.projectImages).forEach((file) => {
      formData.append('projectImages', file);
    });

    try {
      setLoading(true);

      const res = await fetch('http://localhost:5000/api/v1/projects', {
        method: 'POST',
        body: formData,
      });

      setLoading(false);

      const projectInfo = await res.json();
      console.log(projectInfo);

      reset();
      if (projectInfo.success)
        toast.success('Project added successfully', { id: toastId });
      else toast.error(projectInfo.message, { id: toastId });
      router.push('/dashboard/project');
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mt-4 mx-auto p-6 bg-backgroundLight shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Upload Project</h2>

      <div className="space-y-3 md:space-y-5">
        <label className="block mb-2">
          Project Name:
          <input
            placeholder="Your project name"
            {...register('name', { required: 'Project name is required' })}
            className="border p-2 w-full rounded text-backgroundDark "
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </label>

        <label className="block mb-2">
          Details:
          <textarea
            {...register('details', {
              required: 'Project details are required',
            })}
            placeholder="Your project details"
            className="border p-2 w-full rounded text-backgroundDark "
          />
          {errors.details && (
            <p className="text-red-500">{errors.details.message}</p>
          )}
        </label>

        <label className="block mb-2">
          Live Link:
          <input
            placeholder="Your project live link"
            {...register('liveLink')}
            className="border p-2 w-full rounded text-backgroundDark "
          />
        </label>

        <label className="block mb-2">
          GitHub Link:
          <input
            {...register('githubLink')}
            placeholder="Your project github link"
            className="border p-2 w-full rounded text-backgroundDark "
          />
        </label>

        <label className="block mb-2">
          Technologies (comma-separated):
          <input
            placeholder="exmp. React, Node, ..."
            {...register('technologies')}
            className="border p-2 w-full rounded text-backgroundDark "
          />
        </label>

        <div className="block mb-2">
          <label className="border p-2 w-full rounded flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
            <Upload className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Upload Cover Image</span>
            <input
              {...register('coverImage', {
                required: 'Cover image is required',
              })}
              type="file"
              className="hidden"
            />
          </label>
          {errors.coverImage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.coverImage.message}
            </p>
          )}
        </div>

        <div className="block mb-2">
          <label className="border p-2 w-full rounded flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
            <Upload className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Project Images (Multiple)</span>
            <input
              {...register('projectImages', {
                required: 'At least one project image is required',
              })}
              type="file"
              multiple
              className="hidden"
            />
          </label>
          {errors.projectImages && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectImages.message}
            </p>
          )}
        </div>

        <Cta
          text={loading ? 'Uploading...' : 'Submit'}
          disabled={loading}
          fullWidth
        />
      </div>
    </form>
  );
}

export default ProjectForm;
