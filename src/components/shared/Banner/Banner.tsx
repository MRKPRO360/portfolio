'use client';

import { motion } from 'framer-motion';
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import bg from '../../../assets/images/hero.jpg';
import profile from '../../../assets/images/profile.jpg';
import Cta from '../../Cta/Cta';
import Image from 'next/image';

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        minHeight: '75vh',
      }}
    >
      <div className="max-w-screen-xl px-3 xl:px-0 mx-auto mt-10 md:mt-32">
        <div className="flex flex-col-reverse md:flex-row gap-10 justify-between">
          <div className=" md:w-[50%] flex flex-col justify-between ">
            {/* GHOST */}
            <div className="hidden md:block h-0 md:h-8 "></div>
            <div className="flex items-center  md:gap-2 md:mb-0">
              <span className="inline-block w-12 h-[3px] bg-backgroundGreen"></span>
              <span className="uppercase">Hello I&apos;m,</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-textWhite">
              <span className="text-textGreen">Md Rezaul!</span>
              <br />
              <span className="inline-block my-3">Jr. Full Stack Web</span>
              <br />
              <span>Developer</span>
            </h1>

            <p className="mt-4 mb-3 md:my-0">
              Web developer based in Bangladesh. I am adventurous person and I
              am ready for the next challenge!
            </p>

            <div className="flex items-center gap-5">
              <Cta text="Contact Me" />
              <div className="flex items-center gap-x-3 text-2xl text-textWhite">
                <RiFacebookFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiLinkedinFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiGithubFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiTwitterFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative basis-96 h-[450px] ">
            <div className="w-full h-full transition-transform duration-200 ease-out">
              <Image
                fill
                className={`object-cover object-top rounded-md`}
                src={profile.src}
                alt="rezaul avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

// <div className={styles.centerBox}>
//   <div className={styles.animatedBorderBox}></div>
// </div>
