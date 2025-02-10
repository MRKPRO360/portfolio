// import Cta from '../Cta/Cta';

// const navItems = ['Home', 'Projects', 'Blog', 'About'];
// function Navbar() {
//   return (
//     <nav>
//       <div className="max-w-screen-xl mx-auto md:flex items-center justify-between border-b-[1.5px] border-backgroundLight py-3">
//         <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
//         <ul className="flex justify-between items-center md:gap-x-14 sm:text-lg">
//           {navItems.map((item, index) => (
//             <li key={index}>
//               <a href="#">{item}</a>
//             </li>
//           ))}
//           <Cta text="Download CV" />
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Cta from '../../Cta/Cta';

const navItems = ['Home', 'Projects', 'Blog', 'About'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
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
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" onClick={() => setIsOpen(false)}>
                {item}
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
