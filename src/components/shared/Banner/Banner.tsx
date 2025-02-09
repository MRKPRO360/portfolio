'use client';

import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from 'react-icons/ri';
import bg from '../../../assets/images/hero.jpg';
import profile from '../../../assets/images/profile.jpg';
import Cta from '../Cta/Cta';
import Image from 'next/image';
import styles from './Banner.module.css';
import { useRef, useState } from 'react';

function Banner() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const y = ((e.clientX - left - width / 2) / width) * 80; // Adjust sensitivity
    const x = ((e.clientY - top - height / 2) / height) * 80; // Adjust sensitivity
    setRotation({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '75vh',
      }}
    >
      <div className="max-w-screen-xl mx-auto mt-32">
        <div className="flex sm:gap-10 justify-between">
          <div className="space-y-4 w-[50%]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-12 h-[3px] bg-backgroundGreen"></span>
              <span className="uppercase">Hello I&apos;m,</span>
            </div>
            <h1 className="text-5xl font-extrabold">
              <span className="text-textGreen">Md Rezaul!</span>
              <br />
              <span className="my-4 inline-block">Jr. Full Stack Web</span>
              <br />
              <span>Developer</span>
            </h1>
            <p>
              Web developer based in Bangladesh. I am adventurous person and I
              am ready for the next challenge!
            </p>

            <div className="flex items-center gap-3">
              <Cta text="Contact Me" />
              <div className="flex items-center gap-x-3 text-2xl">
                <RiFacebookFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiLinkedinFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiGithubFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
                <RiTwitterFill className="hover:text-textGreen transform hover:scale-125 transition duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
          <div
            ref={containerRef}
            className="relative basis-96 h-[450px] perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="w-full h-full transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <Image
                fill
                className={`object-cover object-top rounded-md ${styles.tiltBox} `}
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
