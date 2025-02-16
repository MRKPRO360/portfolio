// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import Cta from '../../Cta/Cta';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { ISession } from '@/types';

// const publicNavItems = [
//   { text: 'Projects', path: '/projects' },
//   { text: 'Blogs', path: '/blogs' },
//   { text: 'Contact', path: '/contact' },
//   { text: 'Login', path: '/login' },
// ];

// const homeNavItems = [{ text: 'About', path: '#about' }];

// function Navbar({ session }: { session: ISession | null }) {
//   console.log(session);

//   const [isOpen, setIsOpen] = useState(false);
//   const pathName = usePathname();

//   const homeItems = homeNavItems.map((item, index) => (
//     <li
//       className={`block hover:text-textGreen transition duration-300 ${
//         item.path === pathName ? 'text-textGreen' : 'text-textGray'
//       }`}
//       key={index}
//     >
//       <a href={item.path}>{item.text}</a>
//     </li>
//   ));
//   const publicItems = publicNavItems.map((item, index) => (
//     <li
//       className={`block hover:text-textGreen transition duration-300 ${
//         item.path === pathName ? 'text-textGreen' : 'text-textGray'
//       }`}
//       key={index}
//     >
//       <a href={item.path}>{item.text}</a>
//     </li>
//   ));

//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (isOpen && !(e.target as HTMLElement).closest('.sidebar')) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <nav className="max-w-screen-xl px-3 xl:px-0 mx-auto border-b-[1.5px] border-backgroundLight py-3 relative">
//       <div className="flex items-center justify-between px-4 md:px-0">
//         <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//         <ul className="hidden md:flex justify-between items-center md:gap-x-14 sm:text-lg">
//           {session?.user ? (
//             <>
//               <Link
//                 href="/dashboard/blogs"
//                 className="hover:text-textGreen transition duration-300"
//               >
//                 Dashboard
//               </Link>
//               {homeItems}
//               <li className="hover:text-textGreen cursor-pointer transition duration-300">
//                 Logout
//               </li>
//             </>
//           ) : (
//             <>
//               {publicItems} {homeItems}
//             </>
//           )}
//           <Cta
//             href="/doc/cv.pdf"
//             download="Md.Rezaul Karim.pdf"
//             text="Download CV"
//           />
//         </ul>
//       </div>
//       {/* Mobile Sidebar */}
//       <motion.div
//         initial={{ x: '-100%' }}
//         animate={{ x: isOpen ? 0 : '-100%' }}
//         transition={{ duration: 0.3 }}
//         className="fixed top-0 left-0 h-full w-64 bg-backgroundLight shadow-lg p-5 md:hidden z-50"
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4"
//         >
//           <X size={28} />
//         </button>
//         <ul className="mt-10 space-y-6 text-lg text-textDark">
//           {session?.user ? (
//             <div className="text-textGray space-y-5 mb-5">
//               <Link
//                 href="/dashboard/blogs"
//                 className="hover:text-textGreen transition duration-300"
//               >
//                 Dashboard
//               </Link>
//               {homeItems}
//               <li className="hover:text-textGreen cursor-pointer transition duration-300">
//                 Logout
//               </li>
//             </div>
//           ) : (
//             <>
//               {publicItems} {homeItems}
//             </>
//           )}
//           <Cta
//             href="/doc/cv.pdf"
//             download="Md.Rezaul Karim.pdf"
//             text="Download CV"
//           />
//         </ul>
//       </motion.div>
//     </nav>
//   );
// }

// export default Navbar;
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Cta from '../../Cta/Cta';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ISession } from '@/types';
import { signOut } from 'next-auth/react';

const publicNavItems = [
  { text: 'Home', path: '/' },
  { text: 'Projects', path: '/projects' },
  { text: 'Blogs', path: '/blogs' },
  { text: 'Contact', path: '/contact' },
  { text: 'Login', path: '/login' },
];

const homeNavItems = [{ text: 'About', path: '#about' }];

function Navbar({ session }: { session: ISession | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  // Close sidebar only if clicking outside, not on menu links
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const sidebar = document.querySelector('.mobile-sidebar');
      const menuButton = document.querySelector('.menu-button');

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(e.target as Node) &&
        !menuButton?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Function to handle menu clicks (closes sidebar after navigation)
  const handleMenuClick = () => setIsOpen(false);

  return (
    <nav className="max-w-screen-xl px-3 xl:px-0 mx-auto border-b-[1.5px] border-backgroundLight py-3 relative">
      <div className="flex items-center justify-between px-4 sm:px-2 md:px-0 flex-wrap space-y-2">
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-button">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex justify-between items-center md:gap-x-10 sm:text-lg w-full lg:w-auto">
          {session?.user ? (
            <>
              <Link
                href="/dashboard/blogs"
                className="hover:text-textGreen transition duration-300"
              >
                Dashboard
              </Link>
              <li
                onClick={() => signOut()}
                className="hover:text-textGreen cursor-pointer transition duration-300"
              >
                Logout
              </li>
            </>
          ) : (
            <>
              {publicNavItems.map((item, index) => (
                <li
                  key={index}
                  className={`block hover:text-textGreen transition duration-300 ${
                    item.path === pathName ? 'text-textGreen' : 'text-textGray'
                  }`}
                >
                  <Link href={item.path}>{item.text}</Link>
                </li>
              ))}
              {homeNavItems.map((item, index) => (
                <li
                  key={index}
                  className={`block hover:text-textGreen transition duration-300 ${
                    item.path === pathName ? 'text-textGreen' : 'text-textGray'
                  }`}
                >
                  <a href={item.path}>{item.text}</a>
                </li>
              ))}
            </>
          )}
          <Cta
            href="/doc/cv.pdf"
            download="Md.Rezaul Karim.pdf"
            text="Download CV"
          />
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-backgroundLight shadow-lg p-5 md:hidden z-50 mobile-sidebar"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
        >
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-6 text-lg text-textDark">
          {session?.user ? (
            <div className="text-textGray space-y-7 mb-7">
              <Link
                href="/dashboard/blogs"
                className="hover:text-textGreen transition duration-300"
                onClick={handleMenuClick}
              >
                Dashboard
              </Link>
              <li
                className="hover:text-textGreen cursor-pointer transition duration-300"
                onClick={() => {
                  signOut();
                  handleMenuClick();
                }}
              >
                Logout
              </li>
            </div>
          ) : (
            <div className="text-textGray space-y-7 mb-7">
              {publicNavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="hover:text-textGreen transition duration-300"
                    onClick={handleMenuClick}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              {homeNavItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="hover:text-textGreen transition duration-300"
                    onClick={handleMenuClick}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </div>
          )}
          <Cta
            href="/doc/cv.pdf"
            download="Md.Rezaul Karim.pdf"
            text="Download CV"
          />
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
