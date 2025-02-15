'use client';

import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { ISidebarItems } from '@/types';
import { usePathname } from 'next/navigation';
let sidebarItems: ISidebarItems[] = [];
function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  if (pathName === '/dashboard/projects') {
    sidebarItems = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Project',
        path: '/dashboard/projects',
      },
      {
        text: 'Add Project',
        path: '/dashboard/projects/addProject',
      },
      {
        text: 'Update Project',
        path: '/dashboard/projects/updateProject',
      },
    ];
  } else if (pathName === '/dashboard/user') {
  } else if (pathName === '/dashboard/blogs') {
    sidebarItems = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Blog',
        path: '/dashboard/blogs',
      },
      {
        text: 'Add Blog',
        path: '/dashboard/blogs/addBlog',
      },
    ];
  } else if (pathName === '/dashboard/messages') {
  }

  return (
    <div className="flex flex-col">
      <Sidebar items={sidebarItems} />
      <div className=" md:ml-[200px] flex-1 my-10 ml-4">{children}</div>
    </div>
  );
}

export default Layout;
