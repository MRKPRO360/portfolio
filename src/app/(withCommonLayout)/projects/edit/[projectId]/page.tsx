import UpdateProjectForm from '@/components/UpdateProjectForm/UpdateProjectForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const res = await fetch(`http://localhost:5000/api/v1/projects/${projectId}`);

  const project = await res.json();

  return {
    title: project.data.name,
    description: project.data.description,
  };
}

async function ProjectEditPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  return (
    <div>
      {/* <UpdateBlogForm projectId={projectId} /> */}
      <UpdateProjectForm projectId={projectId} />
    </div>
  );
}

export default ProjectEditPage;
