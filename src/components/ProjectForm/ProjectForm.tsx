'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ProjectFormInputs {
  name: string;
  details: string;
  liveLink: string;
  githubLink: string;
  technologies: string;
  coverImage: FileList;
  projectImages: FileList;
}

function ProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormInputs>();
  const [loading, setLoading] = useState(false);
  const token = 'your-auth-token'; // Replace with actual token

  const onSubmit = async (data: ProjectFormInputs) => {
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
      const response = await fetch('http://localhost:5000/api/v1/projects', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (response.success) {
        alert('Project Created Successfully!');
        reset(); // Reset the form
      } else {
        alert(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-backgroundLight shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Upload Project</h2>

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
          {...register('details', { required: 'Project details are required' })}
          className="border p-2 w-full rounded text-backgroundDark "
        />
        {errors.details && (
          <p className="text-red-500">{errors.details.message}</p>
        )}
      </label>

      <label className="block mb-2">
        Live Link:
        <input
          {...register('liveLink')}
          className="border p-2 w-full rounded text-backgroundDark "
        />
      </label>

      <label className="block mb-2">
        GitHub Link:
        <input
          {...register('githubLink')}
          className="border p-2 w-full rounded text-backgroundDark "
        />
      </label>

      <label className="block mb-2">
        Technologies (comma-separated):
        <input
          {...register('technologies')}
          className="border p-2 w-full rounded text-backgroundDark "
        />
      </label>

      <label className="block mb-2">
        Cover Image:
        <input
          {...register('coverImage', { required: 'Cover image is required' })}
          type="file"
          className="border p-2 w-full rounded text-backgroundDark "
        />
        {errors.coverImage && (
          <p className="text-red-500">{errors.coverImage.message}</p>
        )}
      </label>

      <label className="block mb-2">
        Project Images (Multiple):
        <input
          {...register('projectImages', {
            required: 'At least one project image is required',
          })}
          type="file"
          multiple
          className="border p-2 w-full rounded text-backgroundDark "
        />
        {errors.projectImages && (
          <p className="text-red-500">{errors.projectImages.message}</p>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded w-full mt-4"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Submit'}
      </button>
    </form>
  );
}

export default ProjectForm;
