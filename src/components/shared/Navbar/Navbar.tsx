'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Cta from '../../Cta/Cta';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pageNavItems = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/dashboard/project' },
  { text: 'Blog', path: '/dashboard/blog' },
];
// 'Home', 'Projects', 'Blog', 'About'

const homeNavItems = [{ text: 'About', path: '#about' }];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (isOpen && !(e.target as HTMLElement).closest('.sidebar')) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="max-w-screen-xl px-3 xl:px-0 mx-auto border-b-[1.5px] border-backgroundLight py-3 relative">
      <div className="flex items-center justify-between px-4 md:px-0">
        <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex justify-between items-center md:gap-x-14 sm:text-lg">
          {pageNavItems.map((item, index) => (
            <li key={index}>
              <Link
                className={`block ${
                  item.path === pathName ? 'text-textGreen' : 'text-textGray'
                }`}
                href={item.path}
              >
                {item.text}
              </Link>
            </li>
          ))}
          {homeNavItems.map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.text}</a>
            </li>
          ))}
          <Cta text="Download CV" />
        </ul>
      </div>
      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-5 md:hidden z-50"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-6 text-lg text-textDark">
          {homeNavItems.map((item, index) => (
            <li key={index}>
              <a href="#" onClick={() => setIsOpen(false)}>
                {item.text}
              </a>
            </li>
          ))}
          <Cta color="light" text="Download CV" />
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
