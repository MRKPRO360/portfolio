import BtnGhost from '@/components/BtnGhost/BtnGhost';
import TextHeading from '@/components/TextHeading/TextHeading';
import TextHighlight from '@/components/TextHighlight/TextHighlight';
import { Database, Monitor, PenTool } from 'lucide-react';
import FeatureCard from './FeatureCard';

function Features() {
  const cardItems = [
    {
      icon: <Monitor size={46} strokeWidth={1} />,
      text: 'Frontend Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nam non accusamus alias odio assumenda!',
    },
    {
      icon: <PenTool size={46} strokeWidth={1} />,
      text: 'UI/UX Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nam non accusamus alias odio assumenda!',
    },
    {
      icon: <Database size={46} strokeWidth={1} />,
      text: 'Backend Development',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nam non accusamus alias odio assumenda!',
    },
  ];

  return (
    <div className="max-w-screen-xl px-3 xl:px-0 mx-auto my-14 md:my-20">
      <TextHighlight text="My Services" />
      <div className="flex items-center justify-between mb-12 md:mb-16">
        <div className="md:w-[400px]">
          <TextHeading text="Captivating Portfolios that A Lasting Impression" />
        </div>
        <div className="hidden md:block">
          <BtnGhost />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {cardItems.map((item, index) => (
          <FeatureCard key={item.text} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
