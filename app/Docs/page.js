"use client"
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <div className='m-10'>
        <div className="text-4xl font-extrabold mt-8 mb-8 text-center">Documentation</div>
        <p>
          Welcome to the Searchify Documentation! Searchify is a web application built to provide seamless user search experiences. It leverages modern web technologies to deliver efficient data handling and a responsive user interface.
        </p>
        <h2 className="mt-4 doch ">Visit the Repository or Deployed Link for Searchify</h2>
        <div className='flex flex-wrap gap-5 mt-4'>
          <motion.a href='https://github.com/AbhishekJ24/searchifyme.git' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg">
            GitHub Repository Link
          </motion.a>
          <motion.a href="https://searchifyme.vercel.app/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg mb-2">
            Deployed Link
          </motion.a>
        </div>
      </div>
    </>
  )
}

export default page
