'use server';

import { redirect } from 'next/navigation';

export const createProject = async (data: FormData) => {
  const res = await fetch('http://localhost:5000/api/v1/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  const projectInfo = await res.json();
  console.log(projectInfo);

  if (projectInfo) redirect('/dashboard/project');
};
