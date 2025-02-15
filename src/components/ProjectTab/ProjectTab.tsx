'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IProject } from '@/types';
import Image from 'next/image';
import { AiOutlineInfoCircle, AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';

function ProjectTabs({
  projects,
  isPublic = false,
}: {
  projects: IProject[];
  isPublic?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<'frontend' | 'fullstack'>(
    'frontend'
  );

  return (
    <div className="2xl:max-w-[1526px] mx-auto">
      <div className=" mb-6 border-b border-backgroundLight">
        {['frontend', 'fullstack'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'frontend' | 'fullstack')}
            className={`mx-2 px-4 py-2 text-lg font-semibold transition-all duration-300 border-b-2 ${
              activeTab === tab
                ? 'border-backgroundGreen text-backgroundGreen'
                : 'border-transparent text-gray-500 hover:text-backgroundGreen'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.type === activeTab)
            .map((project) => (
              <div
                className="bg-backgroundLight text-textGray"
                key={project.name}
              >
                <div className="relative w-full h-60">
                  <Image
                    fill
                    src={project.coverImage}
                    alt={project.name}
                    className="object-cover lg:object-center object-top"
                  />
                </div>
                <div className="px-3 py-5">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <div className="flex items-center gap-3">
                    {isPublic ? (
                      <Link
                        href={`/projects/${project._id}`}
                        className="flex items-center gap-1 px-2 py-1 bg-backgroundGreen font-semibold text-md rounded-sm transition duration-200 hover:shadow-lg hover:shadow-backgroundDark"
                      >
                        <AiOutlineInfoCircle className="text-lg" />
                        <span>Details</span>
                      </Link>
                    ) : (
                      <Link
                        href={`/dashboard/projects/${project._id}`}
                        className="flex items-center gap-1 px-2 py-1 bg-backgroundGreen font-semibold text-md rounded-sm transition duration-200 hover:shadow-lg hover:shadow-backgroundDark"
                      >
                        <AiOutlineInfoCircle className="text-lg" />
                        <span>Details</span>
                      </Link>
                    )}

                    <Link
                      href={project.liveLink}
                      className="flex items-center gap-1  font-semibold text-md transition duration-200 hover:text-textGreen"
                    >
                      <AiOutlineLink />
                      <span>Website</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
export default ProjectTabs;
