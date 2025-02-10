import About from '@/components/shared/About/About';
import Banner from '@/components/shared/Banner/Banner';
import Experience from '@/components/shared/Experience/Experience';
import Features from '@/components/shared/Features/Features';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <Features />
      <About />
      <Experience />
    </div>
  );
}
