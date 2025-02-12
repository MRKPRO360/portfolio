'use client';

import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { ISidebarItems } from '@/types';
import { usePathname } from 'next/navigation';
let sidebarItems: ISidebarItems[] = [];
function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  if (pathName === '/dashboard/project') {
    sidebarItems = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Project',
        path: '/dashboard/project',
      },
      {
        text: 'Add Project',
        path: '/dashboard/project/addProject',
      },
      {
        text: 'Update Project',
        path: '/dashboard/project/updateProject',
      },
    ];
  } else if (pathName === '/dashboard/user') {
  } else if (pathName === '/dashboard/blog') {
    sidebarItems = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Blog',
        path: '/dashboard/blog',
      },
      {
        text: 'Add Blog',
        path: '/dashboard/blog/addBlog',
      },
    ];
  } else if (pathName === '/dashboard/message') {
  }

  return (
    <div>
      <Sidebar items={sidebarItems} />

      <div>{children}</div>
    </div>
  );
}

export default Layout;
