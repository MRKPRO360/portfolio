'use client';
import { FaUser, FaCalendarAlt, FaTag, FaEdit, FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IBlog } from '@/types';
import Image from 'next/image';
import Modal from '../shared/Modal/Modal';
import { useState } from 'react';
import { toast } from 'sonner';
import Cta from '../Cta/Cta';

const BlogDetails = ({
  post,
  isPublic = false,
}: {
  post: IBlog;
  isPublic?: boolean;
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    // Navigate to edit page
    router.push(`/dashboard/blogs/edit/${post._id}`);
  };

  const handleDelete = () => {
    // Handle delete logic
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    const toastId = toast.loading('Deleting ...');

    try {
      const res = await fetch(
        `https://next-portfolio-server-bay.vercel.app/api/v1/blogs/${post._id}`,
        {
          method: 'DELETE',
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success('Post deleted successfully', { id: toastId });
        router.push('/dashboard/blogs');
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
    <div className="mx-auto bg-backgroundLight text-text-gray rounded-sm">
      <div className=" md:flex items-center justify-between">
        <div className="relative flex-1 h-56 md:h-80">
          <Image
            fill
            src={post.blogImage}
            alt={post.title}
            className="object-cover object-center"
          />
        </div>
        <div className="flex-1 p-5">
          <h1 className="text-2xl font-bold ">{post.title}</h1>
          <div className="mt-2 flex items-center  text-sm space-x-4">
            <div className="flex items-center">
              <FaUser className="mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center text-textGreen text-sm">
            <FaTag className="mr-1" />
            <span>{post.tag}</span>
          </div>
          <p className=" mt-3 leading-relaxed">{post.content}</p>
          {!isPublic ? (
            <div className="mt-5 flex space-x-4">
              <button
                onClick={handleEdit}
                className="flex items-center bg-yellow-500  px-4 py-2 rounded-sm hover:bg-yellow-600 transition"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center bg-red-500  px-4 py-2 rounded-sm hover:bg-red-600 transition"
              >
                <FaTrash className="mr-2" /> Delete
              </button>
            </div>
          ) : (
            <div className="mt-4" onClick={() => router.back()}>
              <Cta
                fullWidth
                text="Go Back
                  "
              />
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          confirmDelete={confirmDelete}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default BlogDetails;
