import TextHeading from '@/components/TextHeading/TextHeading';

import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    year: '2022',
    title: 'Open Source Contributor - GitHub',
    description:
      'Contributed to React-based projects, fixing bugs and improving UI components.',
  },

  {
    year: '2022',
    title: 'Group Project',
    description:
      'Developed websites using the MERN stack, handling both frontend and backend.',
  },

  {
    year: '2020',
    title: 'Tech Community Volunteer - Dev Meetups',
    description:
      'Organized coding bootcamps and mentored beginners in web development.',
  },
];

const education = [
  {
    year: '2018',
    title: 'Bachelor’s Degree - ABC University',
    description:
      "Completed a Bachelor's degree in Computer Science with a focus on web technologies.",
  },
  {
    year: '2016',
    title: 'Master’s Degree - XYZ University',
    description:
      'Specialized in software engineering and full-stack development.',
  },
  {
    year: '2014',
    title: 'High School Diploma - ABC High School',
    description: 'Graduated with a focus on computer science and mathematics.',
  },
];

function Experience() {
  return (
    <div className="bg-backgroundLight py-6">
      <div className="max-w-screen-xl px-3 xl:px-0 mx-auto my-10 md:my-20 ">
        <div className="text-center mb-6 md:mb-10">
          <TextHeading text="Experience & Education" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-[3px] border-dotted border-gray-700 pb-2">
              Experience
            </h3>
            <ul className="space-y-6">
              {experiences.map((el, index) => (
                <ExperienceCard key={index} info={el} />
              ))}
            </ul>
          </div>
          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-[3px] border-dotted border-gray-700 pb-2">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((el, index) => (
                <ExperienceCard key={index} info={el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
