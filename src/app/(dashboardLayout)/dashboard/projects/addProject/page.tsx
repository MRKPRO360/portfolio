import ProjectForm from '@/components/ProjectForm/ProjectForm';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';

async function AddProjectPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <ProjectForm session={session} />
    </div>
  );
}

export default AddProjectPage;
