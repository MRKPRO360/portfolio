'use client';
import { useState } from 'react';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { IProject } from '@/types';
import { HiLightningBolt } from 'react-icons/hi';
import Link from 'next/link';
import TextHeading from '../TextHeading/TextHeading';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Cta from '../Cta/Cta';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Modal from '../shared/Modal/Modal';

function ProjectDetails({
  project,
  isPublic = false,
}: {
  project: IProject;
  isPublic?: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    // Navigate to edit page
    router.push(`/dashboard/projects/edit/${project._id}`);
  };

  const handleDelete = () => {
    // Handle delete logic
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    const toastId = toast.loading('Deleting ...');

    try {
      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/projects/${project._id}`,
        {
          method: 'DELETE',
        }
      );

      const data = await res.json();
      console.log(data);

      if (data.success) {
        toast.success('Project deleted successfully', { id: toastId });
        router.push('/dashboard/projects');
      } else toast.error(data.message, { id: toastId });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong', { id: toastId });
    }

    setIsModalOpen(false);
  };

  const closeModal = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (e && (e.target as HTMLElement).id === 'modal-overlay') {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="2xl:max-w-[1526px] mx-auto space-y-6">
      <div className="text-center mb-10">
        <TextHeading text={`${project.name} Features`} />
      </div>
      {/* Cover Image and Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-64 object-cover rounded-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <div className="flex items-center gap-6">
            <p className="font-semibold text-lg">Type: {project.type}</p>
            <div className="flex gap-4">
              {!isPublic && (
                <div className="flex space-x-4">
                  <button
                    onClick={handleEdit}
                    className="flex items-center transition hover:text-textGreen"
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex items-center transition hover:text-red-500"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          <ul className="mt-3 space-y-1">
            {project.details.split(',').map((detail, index) => (
              <li className="flex items-center" key={index}>
                <HiLightningBolt className="text-textGreen" />
                {detail}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            <Link
              href={project.liveLink}
              className="flex items-center gap-1  font-semibold text-md transition duration-200 hover:text-textGreen"
            >
              <AiOutlineLink />
              <span>Live Website</span>
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              className="flex items-center gap-1  font-semibold text-md transition duration-200 hover:text-textGreen"
            >
              <AiOutlineGithub /> GitHub
            </Link>

            <div className="" onClick={() => router.back()}>
              <Cta
                text="Go Back
                  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.projectImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Project Image ${index + 1}`}
            className="w-full h-40 object-cover object-top rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Expanded Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Expanded Project"
            className="max-w-3xl max-h-screen object-contain rounded-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          confirmDelete={confirmDelete}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default ProjectDetails;
