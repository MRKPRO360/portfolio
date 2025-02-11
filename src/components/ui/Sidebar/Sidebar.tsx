'use client';
import { useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { LiaTimesSolid } from 'react-icons/lia';
import { ISidebarItems } from '../../../types/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({ items }: { items: ISidebarItems[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative cursor-pointer p-2 m-4 text-gray-800 bg-gray-200 rounded z-[1000]"
      >
        {isOpen ? <LiaTimesSolid /> : <RxHamburgerMenu />}
      </button>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        style={{ position: 'fixed', left: 0, zIndex: 100 }}
        className={` h-full w-48 top-0 bg-backgroundGreen text-white pt-14 md:pt-5 transform 
  ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
  md:relative md:translate-x-0 transition-transform `}
      >
        <ul className="mt-4 flex flex-col space-y-2">
          {items.map((el) => (
            <Link
              key={el.text}
              href={el.path}
              style={{
                borderRadius: '6px 0 0 6px',
              }}
              className={`block py-2 pl-6 font-semibold md:text-lg cursor-pointer${
                el.path === pathName
                  ? ' bg-backgroundDark text-textGreen'
                  : ' text-textGray'
              }`}
            >
              {el.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
