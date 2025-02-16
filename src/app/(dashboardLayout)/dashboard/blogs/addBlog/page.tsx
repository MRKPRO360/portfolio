import AddBlogForm from '@/components/AddBlogForm/AddBlogForm';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

const AddBlog = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <AddBlogForm session={session} />
    </div>
  );
};

export default AddBlog;
