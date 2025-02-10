import { FaCalendarCheck, FaCheck } from 'react-icons/fa';

function ExperienceCard({
  info,
}: {
  info: { year: string; title: string; description: string };
}) {
  return (
    <div>
      <li className="flex items-start gap-4">
        <div className="bg-textGreen w-6 h-6 rounded-full mt-2 flex items-center justify-center">
          <FaCheck />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">{info.title}</h4>
          <div className="flex items-center gap-2">
            <FaCalendarCheck className="text-textGreen text-md" />
            <p className="text-sm text-gray-400">{info.year}</p>
          </div>
          <p className="text-gray-300">{info.description}</p>
        </div>
      </li>
    </div>
  );
}

export default ExperienceCard;
