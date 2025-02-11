'use client';

import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { ISidebarItems } from '@/types';
import { usePathname } from 'next/navigation';
let sidebarItems: ISidebarItems[] = [];
function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  console.log(pathName);

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
        text: 'Add Blog',
        path: '/addBlog',
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
