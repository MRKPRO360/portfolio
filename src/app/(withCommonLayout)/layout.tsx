import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

async function HomePageLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="max-w-[1526px] mx-auto">
      <Navbar session={session} />
      <div className="my-10 md:my-14 min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
