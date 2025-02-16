'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-backgroundDark">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-backgroundLight p-8 rounded-lg shadow-lg text-center w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        <p className="text-gray-500 mb-6">Choose a sign-in method</p>

        <button
          onClick={() =>
            signIn('google', {
              callbackUrl: 'http://localhost:3000/dashboard/blogs',
            })
          }
          className="flex items-center w-full p-3 mb-4 border rounded-lg hover:bg-backgroundDark transition"
        >
          <FcGoogle className="text-2xl mr-3" /> Sign in with Google
        </button>

        <button
          onClick={() =>
            signIn('github', {
              callbackUrl: 'http://localhost:3000/dashboard/blogs',
            })
          }
          className="flex items-center w-full p-3 border rounded-lg hover:bg-backgroundDark transition"
        >
          <FaGithub className="text-2xl mr-3" /> Sign in with GitHub
        </button>
      </motion.div>
    </div>
  );
};

export default Login;
