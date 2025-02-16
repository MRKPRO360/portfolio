import ProjectTabs from '@/components/ProjectTab/ProjectTab';
import TextHeading from '@/components/TextHeading/TextHeading';
import { IProject } from '@/types';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

async function ProjectPage() {
  const session = await getServerSession(authOptions);

  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/projects',
    {
      cache: 'no-store',
    }
  );

  const projects = await res.json();

  const userProjects = projects?.data?.filter(
    (project: IProject) => project.authorEmail === session?.user?.email
  );

  return (
    <div>
      <div className="text-center mb-10">
        <TextHeading text="My project that illustrate my ideas" />
      </div>

      {userProjects?.length ? (
        <ProjectTabs projects={userProjects} />
      ) : (
        <div className="font-semibold text-center text-lg">
          <span>You don&apos;t have any projects.</span>{' '}
          <Link
            className="underline text-textGreen"
            href="/dashboard/projects/addProject"
          >
            Create Project
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
