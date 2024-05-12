"use client"
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <div className='m-10 md:w-96 md:m-auto'>
        <div className="text-4xl font-extrabold mt-8 mb-8 flex justify-center md:text-6xl">Documentation</div>
        <p className='md:text-2xl text-center'>
          Welcome to the Searchify Documentation! Searchify is a web application built to provide seamless user search experiences. It leverages modern web technologies to deliver efficient data handling and a responsive user interface.
        </p>
        <h2 className="mt-4 doch md:text-2xl text-center">Visit the Repository or Deployed Link for Searchify</h2>
        <div className='flex flex-wrap gap-5 mt-4 justify-center'>
          <motion.a href='https://github.com/AbhishekJ24/searchifyme.git' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg w-40 h-16 text-center">
            GitHub Repository Link
          </motion.a>
          <motion.a href="https://searchifyme.vercel.app/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg mb-2 w-40 h-16 flex justify-center items-center">
            Deployed Link
          </motion.a>
        </div>
      </div>
    </>
  )
}

export default page
