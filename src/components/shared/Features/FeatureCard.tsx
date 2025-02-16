import BtnGhost from '@/components/BtnGhost/BtnGhost';
import { JSX } from 'react';

function FeatureCard({
  item,
  index,
}: {
  item: {
    icon: JSX.Element;
    text: string;
    description: string;
  };
  index: number;
}) {
  return (
    <div
      className={`border border-backgroundLight p-5 md:py-12 rounded-sm transition duration-500  hover:shadow-lg hover:shadow-backgroundLight ${
        index === 1 && 'lg:transfrom lg:-translate-y-5'
      }`}
    >
      <span>{item.icon}</span>
      <h4 className="text-xl font-semibold my-2 sm:my-4">{item.text}</h4>
      <p className="leading-7 mb-2 sm:mb-4">{item.description}</p>
      <BtnGhost border={false} />
    </div>
  );
}

export default FeatureCard;
