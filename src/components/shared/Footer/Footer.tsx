import { Mail, Phone, MapPin } from 'lucide-react';
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-textGreen text-backgroundDark py-5">
      <div className="max-w-screen-xl mx-auto px-5 grid md:grid-cols-3 gap-8 justify-items-end">
        {/* justify-items: self-end */}
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
          <p className="mt-2">
            Passionate about building beautiful and efficient web applications.
          </p>

          <div className="flex text-backgroundLight items-center mt-3 gap-x-3 text-xl md:text-2xl ">
            <RiFacebookFill className="hover:text-backgroundDark transform hover:scale-125 transition duration-300 cursor-pointer" />
            <RiLinkedinFill className="hover:text-backgroundDark transform hover:scale-125 transition duration-300 cursor-pointer" />
            <RiGithubFill className="hover:text-backgroundDark transform hover:scale-125 transition duration-300 cursor-pointer" />
            <RiTwitterFill className="hover:text-backgroundDark transform hover:scale-125 transition duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="justify-self-center">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:font-semibold transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:font-semibold transition">
                About
              </a>
            </li>
            <li>
              <Link href="/projects" className="hover:font-semibold transition">
                Project
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:font-semibold transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex items-center">
              <Mail className="mr-2" size={18} />
              <span>mdrezaulkarrim@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={18} />
              <span>+880 1581409228</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={18} />
              <span>Feni, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-md mt-10 border-t-2 border-gray-700 pt-4 font-semibold">
        &copy; {new Date().getFullYear()} MD Rezaul. All rights reserved.
      </div>
    </footer>
  );
}
