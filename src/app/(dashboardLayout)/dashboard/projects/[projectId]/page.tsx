import ProjectDetails from '@/components/ProjectDetails/ProjectDetails';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const res = await fetch(
    `https://next-portfolio-server-bay.vercel.app/api/v1/projects/${projectId}`
  );

  const project = await res.json();

  return {
    title: project.data.name,
    description: project.data.description,
  };
}

async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const res = await fetch(
    `https://next-portfolio-server-bay.vercel.app/api/v1/projects/${projectId}`
  );

  const project = await res.json();
  return (
    <div>
      <ProjectDetails project={project.data} />
    </div>
  );
}

export default ProjectDetailsPage;
