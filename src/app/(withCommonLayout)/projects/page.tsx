import ProjectTabs from '@/components/ProjectTab/ProjectTab';
import TextHeading from '@/components/TextHeading/TextHeading';

async function ProjectPage() {
  const res = await fetch(
    'https://next-portfolio-server-bay.vercel.app/api/v1/projects'
  );
  const projects = await res.json();

  return (
    <div>
      <div className="text-center mb-10">
        <TextHeading text="My project that illustrate my ideas" />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProjectTabs isPublic={true} projects={projects.data} />
      </div>
    </div>
  );
}

export default ProjectPage;
