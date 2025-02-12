'use server';

import { redirect } from 'next/navigation';

export const createBlog = async (data: FormData) => {
  const res = await fetch('http://localhost:5000/api/v1/blogs', {
    method: 'POST',

    body: data,
  });

  const blogInfo = await res.json();

  if (blogInfo) redirect('/dashboard/blog');
};
