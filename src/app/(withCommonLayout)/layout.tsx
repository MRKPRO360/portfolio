import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1526px] mx-auto">
      <Navbar />
      <div className="my-10 md:my-14 min-h-[80vh]">{children}</div>
      <Footer />
    </div>
  );
}

export default HomePageLayout;
