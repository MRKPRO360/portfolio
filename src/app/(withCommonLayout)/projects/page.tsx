import ProjectTabs from '@/components/ProjectTab/ProjectTab';
import TextHeading from '@/components/TextHeading/TextHeading';

async function ProjectPage() {
  const res = await fetch('http://localhost:5000/api/v1/projects');
  const projects = await res.json();

  return (
    <div>
      <div className="text-center mb-10">
        <TextHeading text="My project that illustrate my ideas" />
      </div>
      <ProjectTabs isPublic={true} projects={projects.data} />
    </div>
  );
}

export default ProjectPage;
