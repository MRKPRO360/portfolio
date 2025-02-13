import { IBlog } from '@/types';
import Image from 'next/image';
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import Cta from '../Cta/Cta';
import Link from 'next/link';

const BlogPostCard = ({ post }: { post: IBlog }) => {
  return (
    <div className="bg-backgroundLight text-textWhite rounded-sm shadow-lg overflow-hidden">
      <div className="relative w-full h-72">
        <Image
          fill
          src={post.blogImage}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold ">{post.title}</h2>
        <p className=" mt-2 line-clamp-3 h-12">
          {post.content.length > 50
            ? post.content.slice(0, 50).padEnd(53, '.')
            : post.content}
        </p>
        <div className="mt-1 flex items-center  text-sm space-x-4">
          <div className="flex items-center">
            <FaUser className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="mt-3 mb-1 flex items-center text-textGreen text-sm">
          <FaTag className="mr-1" />
          <span>{post.tag}</span>
        </div>

        <Link href={`/dashboard/blog/${post._id}`}>
          <Cta fullWidth text="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
