'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Cta from '../Cta/Cta';
import { ProjectFormInputs } from '@/types/index';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function UpdateProjectForm({ projectId }: { projectId: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormInputs>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/projects/${projectId}`
      );
      const project = await res.json();

      reset(project.data);
    };

    fetchBlog();
  }, [projectId, reset]);

  const onSubmit = async (data: ProjectFormInputs) => {
    const toastId = toast.loading('Hold on a min...');

    try {
      setLoading(true);

      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/projects/${projectId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            type: data.type,
            details: data.details,
            liveLink: data.liveLink,
            githubLink: data.githubLink,
            technologies: data.technologies,
          }),
        }
      );

      setLoading(false);

      const projectInfo = await res.json();
      console.log(projectInfo);

      reset();
      if (projectInfo.success) {
        router.push('/dashboard/projects');
        toast.success('Project updated successfully', { id: toastId });
      } else toast.error(projectInfo.message, { id: toastId });
    } catch (error) {
      console.error('Update failed:', error);
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
      <h2 className="text-xl font-bold mb-4">Update Project</h2>

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

        <label className="block">
          Project Type:
          <select
            {...register('type', {
              required: 'Project type is required',
            })}
            className="border p-2 w-full rounded text-backgroundDark "
          >
            {' '}
            <option value="">Select a type</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Full Stack</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </label>
        <label className="block mb-2">
          Details (comma separated):
          <textarea
            {...register('details', {
              required: 'Project details are required',
            })}
            rows={4}
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

        <Cta
          text={loading ? 'Updating...' : 'Submit'}
          disabled={loading}
          fullWidth
        />
      </div>
    </form>
  );
}

export default UpdateProjectForm;
