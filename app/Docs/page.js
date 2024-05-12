"use client"
import React from 'react'
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <div>
        <div className="text-5xl font-extrabold mt-8 mb-8 text-center">Documentation</div>
        <div className='headpara md:mx-32 mx-10'>
          <h2 className="mt-4 doch">Introduction</h2>
          <p>
            Welcome to the Searchify Documentation! Searchify is a web application built to provide seamless user search experiences. It leverages modern web technologies to deliver efficient data handling and a responsive user interface.
          </p>
          <h2 className="mt-4 doch">Getting Started</h2>
          <p>
            To get started with Searchify, follow these steps:
          </p>
          <ol>
            <li>Clone the project repository from GitHub.</li>
            <li>Install the necessary dependencies using npm or yarn.</li>
            <li>Run the development server using the provided scripts.</li>
            <li>Access the application in your web browser.</li>
          </ol>

          <h2 className="mt-4 doch">Features</h2>
          <p>
            Searchify offers the following key features:
          </p>
          <ul>
            <li>Real-time search functionality for user data.</li>
            <li>Responsive and intuitive user interface.</li>
            <li>Dynamic pagination for managing large datasets.</li>
            <li>Integration with external APIs for data retrieval.</li>
            <li>Customizable styling using Tailwind CSS.</li>
            <li>Smooth animations powered by Framer Motion.</li>
          </ul>

          <h2 className="mt-4 doch">Usage</h2>
          <p>
            Searchify is designed to be user-friendly and developer-friendly. Developers can easily integrate it into their projects by following the provided API documentation and customization guides.
          </p>

          <h2 className="mt-4 doch">API Documentation</h2>
          <p>
            Searchify's API provides endpoints for fetching user data and performing search operations. Refer to the API documentation for detailed information on available endpoints and request/response formats.
          </p>

          <h2 className="mt-4 doch">Customization</h2>
          <p>
            Developers can customize Searchify's appearance and behavior to suit their project requirements. Tailwind CSS classes can be used to modify styles, while Framer Motion allows for interactive animations and transitions.
          </p>

          <h2 className="mt-4 doch">Support and Feedback</h2>
          <p>
            For any support or feedback related to Searchify, please contact our support team at support@searchify.com. We welcome your suggestions and contributions to improve the platform.
          </p>
          <h2 className="mt-4 doch ">Visit the Repository or Deployed Link for Searchify</h2>
          <div className='flex flex-wrap gap-5 mt-5'>
            <motion.a href='https://github.com/AbhishekJ24/searchifyme.git' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg mb-2">
              GitHub Repository Link
            </motion.a>
            <motion.a href="https://searchifyme.vercel.app/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="search-btn py-1 px-4 rounded-lg mb-2">
              Deployed Link
            </motion.a>
          </div>
        </div>

      </div>
    </>
  )
}

export default page
