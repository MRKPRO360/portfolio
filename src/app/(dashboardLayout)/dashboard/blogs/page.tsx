import BlogPostCard from '@/components/Blog/BlogPostCard';
import TextHeading from '@/components/TextHeading/TextHeading';
import { IBlog } from '@/types';
import { authOptions } from '@/utils/authOptions';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Explore Life',
};

async function DashboardBlogPage() {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/blogs',
    {
      cache: 'no-store',
    }
  );

  const blogs = await res.json();

  return (
    <div className="2xl:max-w-[1526px] 2xl:mx-auto ">
      <div className="mb-10 text-center">
        <TextHeading text="All Blogs" />
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blogs?.data?.length ? (
          blogs?.data
            .filter((post: IBlog) => post.authorEmail === session?.user?.email)
            .map((post: IBlog) => <BlogPostCard key={post._id} post={post} />)
        ) : (
          <div className="font-semibold text-center text-lg">
            <span>You don&apos;t have any blogs.</span>{' '}
            <Link
              className="underline text-textGreen"
              href="/dashboard/blogs/addBlog"
            >
              Create Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardBlogPage;
