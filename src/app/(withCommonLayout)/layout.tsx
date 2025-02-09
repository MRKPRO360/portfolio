import Footer from '@/components/shared/Footer/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default HomePageLayout;
